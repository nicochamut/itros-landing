import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckCircle, Download, ArrowRight, Sparkles, Crown } from 'lucide-react';

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

const SuccessAnimationContainer = styled.div`
  position: relative;
`;

const SuccessIcon = styled.div`
  width: 8rem;
  height: 8rem;
  background: linear-gradient(135deg, #4ade80, #10b981);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.3);
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const SuccessRing = styled.div`
  position: absolute;
  inset: 0;
  width: 8rem;
  height: 8rem;
  background-color: rgba(74, 222, 128, 0.3);
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

  @media (min-width: 1024px) {
    font-size: clamp(2.25rem, 5vw, 3rem);
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #4ade80, #34d399);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
`;

const OrderCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px);
  border-radius: 0.5rem;
`;

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OrderDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;

const DetailValue = styled.span`
  color: white;
  font-weight: 500;
`;

const OrderId = styled.span`
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  color: white;
  font-size: 0.875rem;
`;

const PlanValue = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PlanName = styled.span`
  color: white;
  text-transform: capitalize;
`;

const OrderNote = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
`;

const NoteText = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.button`
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
`;

const SecondaryButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  background: transparent;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  backdrop-filter: blur(24px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const NextStepsCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  border-radius: 0.5rem;
`;

const NextStepsContent = styled.div`
  padding: 1.5rem;
`;

const NextStepsTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  margin-bottom: 1rem;
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;
`;

const StepItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StepNumber = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgba(231, 76, 60, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: white;
`;

const StepText = styled.span`
  color: rgba(255, 255, 255, 0.8);
`;

const steps = [
  'Configura tu perfil y preferencias',
  'Explora las herramientas de IA disponibles',
  'Conecta tus fuentes de datos',
  'Programa una demo personalizada'
];

export function PaymentSuccess() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Get order ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('external_reference');
    
    if (orderId) {
      // In a real app, fetch order details here
      setOrderDetails({
        orderId,
        plan: 'professional', // This would come from the API
        amount: 99.99
      });
    }
  }, []);

  return (
    <Container>
      <Content>
        {/* Success Animation */}
        <SuccessAnimationContainer>
          <SuccessIcon>
            <CheckCircle size={64} color="white" />
          </SuccessIcon>
          <SuccessRing />
        </SuccessAnimationContainer>

        <TitleSection>
          <Title>
            ¡Pago{" "}
            <GradientText>
              exitoso!
            </GradientText>
          </Title>
          <Subtitle>
            Tu suscripción ha sido activada correctamente. 
            Ya puedes acceder a todas las funcionalidades de Itros IA.
          </Subtitle>
        </TitleSection>

        {orderDetails && (
          <OrderCard>
            <CardContent>
              <OrderDetail>
                <DetailLabel>ID de Orden:</DetailLabel>
                <OrderId>{orderDetails.orderId}</OrderId>
              </OrderDetail>
              <OrderDetail>
                <DetailLabel>Plan:</DetailLabel>
                <PlanValue>
                  <Crown size={16} color="#a855f7" />
                  <PlanName>{orderDetails.plan}</PlanName>
                </PlanValue>
              </OrderDetail>
              <OrderDetail>
                <DetailLabel>Monto:</DetailLabel>
                <DetailValue>${orderDetails.amount} USD</DetailValue>
              </OrderDetail>
              <OrderNote>
                <NoteText>
                  Recibirás un email de confirmación con todos los detalles de tu suscripción.
                </NoteText>
              </OrderNote>
            </CardContent>
          </OrderCard>
        )}

        <ButtonsContainer>
          <PrimaryButton>
            <Sparkles size={16} style={{ marginRight: '0.5rem' }} />
            Acceder al Dashboard
            <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
          </PrimaryButton>
          
          <SecondaryButton>
            <Download size={16} style={{ marginRight: '0.5rem' }} />
            Descargar Factura
          </SecondaryButton>
        </ButtonsContainer>

        {/* Next Steps */}
        <NextStepsCard>
          <NextStepsContent>
            <NextStepsTitle>Próximos pasos:</NextStepsTitle>
            <StepsList>
              {steps.map((step, index) => (
                <StepItem key={index}>
                  <StepNumber>
                    {index + 1}
                  </StepNumber>
                  <StepText>{step}</StepText>
                </StepItem>
              ))}
            </StepsList>
          </NextStepsContent>
        </NextStepsCard>
      </Content>
    </Container>
  );
}