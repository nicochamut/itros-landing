import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js'
import * as kv from './kv_store.tsx'

const app = new Hono()

// CORS configuration
app.use('*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

app.use('*', logger(console.log))

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

// Mercado Pago configuration
const MP_ACCESS_TOKEN = Deno.env.get('MERCADO_PAGO_ACCESS_TOKEN')
const MP_WEBHOOK_SECRET = Deno.env.get('MERCADO_PAGO_WEBHOOK_SECRET')

if (!MP_ACCESS_TOKEN) {
  console.error('MERCADO_PAGO_ACCESS_TOKEN environment variable is required')
}

// Health check
app.get('/make-server-f21ceeec/', (c) => {
  return c.json({ message: 'Itros Payment Server is running!' })
})

// Create Mercado Pago preference
app.post('/make-server-f21ceeec/create-payment', async (c) => {
  try {
    const { plan, userEmail, userId } = await c.req.json()
    
    if (!plan || !userEmail) {
      return c.json({ error: 'Plan and userEmail are required' }, 400)
    }

    // Plan configuration
    const plans = {
      starter: {
        title: 'Plan Starter - Itros IA',
        unit_price: 29.99,
        description: 'Acceso básico a herramientas de IA'
      },
      professional: {
        title: 'Plan Professional - Itros IA', 
        unit_price: 99.99,
        description: 'Acceso completo con análisis avanzado'
      },
      enterprise: {
        title: 'Plan Enterprise - Itros IA',
        unit_price: 299.99,
        description: 'Solución empresarial completa'
      }
    }

    const selectedPlan = plans[plan as keyof typeof plans]
    if (!selectedPlan) {
      return c.json({ error: 'Invalid plan selected' }, 400)
    }

    // Generate unique order ID
    const orderId = `itros_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

    // Create preference payload
    const preference = {
      items: [
        {
          title: selectedPlan.title,
          unit_price: selectedPlan.unit_price,
          quantity: 1,
          currency_id: 'USD',
          description: selectedPlan.description
        }
      ],
      payer: {
        email: userEmail
      },
      external_reference: orderId,
      back_urls: {
        success: `${c.req.header('origin') || 'http://localhost:3000'}/payment-success`,
        failure: `${c.req.header('origin') || 'http://localhost:3000'}/payment-failure`,
        pending: `${c.req.header('origin') || 'http://localhost:3000'}/payment-pending`
      },
      auto_return: 'approved',
      notification_url: `${Deno.env.get('SUPABASE_URL')}/functions/v1/make-server-f21ceeec/webhook`,
      metadata: {
        user_id: userId,
        plan: plan,
        order_id: orderId
      }
    }

    // Call Mercado Pago API
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`
      },
      body: JSON.stringify(preference)
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Mercado Pago API Error:', errorData)
      return c.json({ error: 'Failed to create payment preference' }, 500)
    }

    const mpResponse = await response.json()
    
    // Store order in database
    await kv.set(`order_${orderId}`, {
      orderId,
      userId,
      plan,
      userEmail,
      amount: selectedPlan.unit_price,
      status: 'pending',
      preferenceId: mpResponse.id,
      createdAt: new Date().toISOString()
    })

    console.log(`Order created: ${orderId}, Preference: ${mpResponse.id}`)

    return c.json({
      preferenceId: mpResponse.id,
      initPoint: mpResponse.init_point,
      sandboxInitPoint: mpResponse.sandbox_init_point,
      orderId: orderId
    })

  } catch (error) {
    console.error('Error creating payment preference:', error)
    return c.json({ error: 'Internal server error while creating payment' }, 500)
  }
})

// Mercado Pago Webhook handler
app.post('/make-server-f21ceeec/webhook', async (c) => {
  try {
    const body = await c.req.json()
    console.log('Webhook received:', JSON.stringify(body, null, 2))

    // Validate webhook (basic validation)
    if (body.type !== 'payment') {
      console.log('Webhook type is not payment, ignoring')
      return c.json({ status: 'ignored' })
    }

    const paymentId = body.data.id
    if (!paymentId) {
      console.error('No payment ID in webhook')
      return c.json({ error: 'No payment ID' }, 400)
    }

    // Get payment details from Mercado Pago
    const paymentResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`
      }
    })

    if (!paymentResponse.ok) {
      console.error('Failed to get payment details from Mercado Pago')
      return c.json({ error: 'Failed to get payment details' }, 500)
    }

    const paymentData = await paymentResponse.json()
    const orderId = paymentData.external_reference
    const status = paymentData.status

    console.log(`Payment ${paymentId} status: ${status}, Order: ${orderId}`)

    if (!orderId) {
      console.error('No external reference found in payment data')
      return c.json({ error: 'No order reference' }, 400)
    }

    // Get existing order
    const existingOrder = await kv.get(`order_${orderId}`)
    if (!existingOrder) {
      console.error(`Order not found: ${orderId}`)
      return c.json({ error: 'Order not found' }, 404)
    }

    // Update order status
    const updatedOrder = {
      ...existingOrder,
      status: status,
      paymentId: paymentId,
      paymentMethod: paymentData.payment_method_id,
      updatedAt: new Date().toISOString(),
      paymentData: paymentData
    }

    await kv.set(`order_${orderId}`, updatedOrder)

    // If payment is approved, activate user subscription
    if (status === 'approved') {
      console.log(`Activating subscription for user ${existingOrder.userId}`)
      await kv.set(`subscription_${existingOrder.userId}`, {
        userId: existingOrder.userId,
        plan: existingOrder.plan,
        status: 'active',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
        orderId: orderId
      })
    }

    console.log(`Order ${orderId} updated with status: ${status}`)
    return c.json({ status: 'processed' })

  } catch (error) {
    console.error('Error processing webhook:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Get payment status
app.get('/make-server-f21ceeec/payment-status/:orderId', async (c) => {
  try {
    const orderId = c.req.param('orderId')
    const order = await kv.get(`order_${orderId}`)
    
    if (!order) {
      return c.json({ error: 'Order not found' }, 404)
    }

    return c.json({
      orderId: order.orderId,
      status: order.status,
      plan: order.plan,
      amount: order.amount,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt
    })
  } catch (error) {
    console.error('Error getting payment status:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Get user subscription
app.get('/make-server-f21ceeec/subscription/:userId', async (c) => {
  try {
    const userId = c.req.param('userId')
    const subscription = await kv.get(`subscription_${userId}`)
    
    if (!subscription) {
      return c.json({ subscription: null })
    }

    return c.json({ subscription })
  } catch (error) {
    console.error('Error getting subscription:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

console.log('Itros Payment Server initialized')

Deno.serve(app.fetch)