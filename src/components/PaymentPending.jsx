import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Clock, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
// import { projectId, publicAnonKey } from '../utils/supabase/info';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #111827 0%, #1e293b 50%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Content = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StatusAnimationContainer = styled.div`
  position: relative;
`;

const StatusIcon = styled.div`
  width: 8rem;
  height: 8rem;
  background: ${props => props.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.3);
  animation: ${props => props.isPending ? pulse : 'none'} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const StatusRing = styled.div`
  position: absolute;
  inset: 0;
  width: 8rem;
  height: 8rem;
  background-color: rgba(251, 191, 36, 0.3);
  border-radius: 50%;
  margin: 0 auto;
  filter: blur(12px);
  animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 200;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
`;

const StatusCard = styled.div`
  border: 1px solid ${props => props.borderColor};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.bgColor};
  backdrop-filter: blur(24px);
  border-radius: 0.5rem;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OrderDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;

const OrderId = styled.span`
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  color: white;
  font-size: 0.875rem;
`;

const ProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProcessCard = styled.div`
  padding: 1rem;
  background-color: ${props => props.bgColor};
  border-radius: 0.5rem;
  border: 1px solid ${props => props.borderColor};
  backdrop-filter: blur(8px);
`;

const ProcessTitle = styled.div`
  font-size: 0.875rem;
  color: ${props => props.textColor};
  margin-bottom: 0.5rem;
`;

const ProcessList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
`;

const ProcessItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProcessDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${props => props.active ? '#fbbf24' : 'rgba(255, 255, 255, 0.4)'};
  border-radius: 50%;
  animation: ${props => props.active ? pulse : 'none'} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const AutoUpdateNote = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
`;

const CheckButton = styled.button`
  background: linear-gradient(to right, #e74c3c, #22d3ee);
  color: white;
  padding: 0.75rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 25px 50px -12px rgba(231, 76, 60, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(to right, #22d3ee, #e74c3c);
    box-shadow: 0 25px 50px -12px rgba(231, 76, 60, 0.6);
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SpinningIcon = styled(RefreshCw)`
  animation: ${spin} 1s linear infinite;
`;

const InfoCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  border-radius: 0.5rem;
`;

const InfoContent = styled.div`
  padding: 1.5rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  margin-bottom: 0.75rem;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
`;

const BackButton = styled.button`
  color: rgba(255, 255, 255, 0.7);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export function PaymentPending() {
  const [orderStatus, setOrderStatus] = useState('pending');
  const [isChecking, setIsChecking] = useState(false);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    // Get order ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const externalReference = urlParams.get('external_reference');
    if (externalReference) {
      setOrderId(externalReference);
    }

    // Auto-check status every 10 seconds
    const interval = setInterval(checkPaymentStatus, 10000);
    return () => clearInterval(interval);
  }, [orderId]);

  const checkPaymentStatus = async () => {
    if (!orderId || isChecking) return;

    setIsChecking(true);
    try {
      // Simulate API call - replace with actual implementation
      // const response = await fetch(
      //   `https://${projectId}.supabase.co/functions/v1/make-server-f21ceeec/payment-status/${orderId}`,
      //   {
      //     headers: {
      //       'Authorization': `Bearer ${publicAnonKey}`
      //     }
      //   }
      // );

      // For demo purposes, simulate a response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate random status change for demo
      const statuses = ['pending', 'approved', 'rejected'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      setOrderStatus(randomStatus);
      
      // Redirect based on status
      if (randomStatus === 'approved') {
        setTimeout(() => {
          window.location.href = `/payment-success?external_reference=${orderId}`;
        }, 2000);
      } else if (randomStatus === 'rejected') {
        setTimeout(() => {
          window.location.href = '/payment-failure';
        }, 2000);
      }
    } catch (error) {
      console.error('Error checking payment status:', error);
    } finally {
      setIsChecking(false);
    }
  };

  const getStatusInfo = () => {
    switch (orderStatus) {
      case 'approved':
        return {
          icon: CheckCircle,
          gradient: 'linear-gradient(135deg, #4ade80, #10b981)',
          bgColor: 'rgba(34, 197, 94, 0.2)',
          borderColor: 'rgba(34, 197, 94, 0.3)',
          textColor: '#86efac',
          title: '¡Pago aprobado!',
          message: 'Tu pago ha sido procesado exitosamente. Redirigiendo...'
        };
      case 'rejected':
        return {
          icon: AlertCircle,
          gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
          bgColor: 'rgba(239, 68, 68, 0.2)',
          borderColor: 'rgba(239, 68, 68, 0.3)',
          textColor: '#fca5a5',
          title: 'Pago rechazado',
          message: 'Tu pago no pudo ser procesado. Redirigiendo...'
        };
      default:
        return {
          icon: Clock,
          gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
          bgColor: 'rgba(251, 191, 36, 0.2)',
          borderColor: 'rgba(251, 191, 36, 0.3)',
          textColor: '#fde047',
          title: 'Pago en proceso',
          message: 'Estamos procesando tu pago. Esto puede tomar unos minutos.'
        };
    }
  };

  const statusInfo = getStatusInfo();
  const StatusIconComponent = statusInfo.icon;

  return (
    <Container>
      <Content>
        {/* Status Animation */}
        <StatusAnimationContainer>
          <StatusIcon gradient={statusInfo.gradient} isPending={orderStatus === 'pending'}>
            <StatusIconComponent size={64} color="white" />
          </StatusIcon>
          {orderStatus === 'pending' && <StatusRing />}
        </StatusAnimationContainer>

        <TitleSection>
          <Title>{statusInfo.title}</Title>
          <Subtitle>{statusInfo.message}</Subtitle>
        </TitleSection>

        {/* Status Details */}
        <StatusCard borderColor={statusInfo.borderColor} bgColor={statusInfo.bgColor}>
          <CardContent>
            {orderId && (
              <OrderDetail>
                <DetailLabel>ID de Orden:</DetailLabel>
                <OrderId>{orderId}</OrderId>
              </OrderDetail>
            )}
            
            {orderStatus === 'pending' && (
              <ProcessContainer>
                <ProcessCard bgColor={statusInfo.bgColor} borderColor={statusInfo.borderColor}>
                  <ProcessTitle textColor={statusInfo.textColor}>
                    ¿Qué está sucediendo?
                  </ProcessTitle>
                  <ProcessList>
                    <ProcessItem>
                      <ProcessDot active={true} />
                      Verificando con la entidad bancaria
                    </ProcessItem>
                    <ProcessItem>
                      <ProcessDot active={false} />
                      Procesando la transacción
                    </ProcessItem>
                    <ProcessItem>
                      <ProcessDot active={false} />
                      Activando tu suscripción
                    </ProcessItem>
                  </ProcessList>
                </ProcessCard>

                <AutoUpdateNote>
                  Actualizamos el estado automáticamente cada 10 segundos
                </AutoUpdateNote>
              </ProcessContainer>
            )}
          </CardContent>
        </StatusCard>

        {orderStatus === 'pending' && (
          <CheckButton 
            onClick={checkPaymentStatus}
            disabled={isChecking}
          >
            {isChecking ? (
              <>
                <SpinningIcon size={16} style={{ marginRight: '0.5rem' }} />
                Verificando...
              </>
            ) : (
              <>
                <RefreshCw size={16} style={{ marginRight: '0.5rem' }} />
                Verificar estado
              </>
            )}
          </CheckButton>
        )}

        {/* Help Section */}
        <InfoCard>
          <InfoContent>
            <InfoTitle>Información importante:</InfoTitle>
            <InfoList>
              <p>• Los pagos pueden tardar entre 1 y 10 minutos en procesarse</p>
              <p>• Recibirás un email de confirmación una vez aprobado el pago</p>
              <p>• Si el pago es rechazado, no se realizará ningún cargo</p>
              <p>• Para pagos en efectivo, puede tomar hasta 24 horas</p>
            </InfoList>
          </InfoContent>
        </InfoCard>

        <BackButton onClick={() => window.location.href = '/'}>
          Volver al inicio
        </BackButton>
      </Content>
    </Container>
  );
}