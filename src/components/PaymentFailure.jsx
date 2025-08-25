import React from 'react';
import styled, { keyframes } from 'styled-components';
import { XCircle, ArrowLeft, RefreshCw, MessageCircle } from 'lucide-react';

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

const ErrorAnimationContainer = styled.div`
  position: relative;
`;

const ErrorIcon = styled.div`
  width: 8rem;
  height: 8rem;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.3);
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const ErrorRing = styled.div`
  position: absolute;
  inset: 0;
  width: 8rem;
  height: 8rem;
  background-color: rgba(239, 68, 68, 0.3);
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

const GradientText = styled.span`
  background: linear-gradient(to right, #f87171, #ef4444);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ErrorCard = styled.div`
  border: 1px solid rgba(239, 68, 68, 0.3);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: rgba(239, 68, 68, 0.1);
  backdrop-filter: blur(24px);
  border-radius: 0.5rem;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ErrorTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
`;

const CausesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const CauseItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
`;

const CauseDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #f87171;
  border-radius: 50%;
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

const BackButton = styled.button`
  color: rgba(255, 255, 255, 0.7);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const SupportCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  border-radius: 0.5rem;
`;

const SupportContent = styled.div`
  padding: 1.5rem;
`;

const SupportTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  margin-bottom: 0.75rem;
`;

const SupportDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
`;

const SupportOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const SupportOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const causes = [
  'Fondos insuficientes en la cuenta',
  'Datos de la tarjeta incorrectos',
  'Límite de la tarjeta excedido',
  'Problema temporal con el banco'
];

export function PaymentFailure() {
  const handleRetry = () => {
    // Redirect back to checkout
    window.location.href = '/checkout';
  };

  const handleSupport = () => {
    // Open support chat or redirect to support page
    window.open('mailto:support@itros.ai?subject=Payment%20Issue', '_blank');
  };

  return (
    <Container>
      <Content>
        {/* Error Animation */}
        <ErrorAnimationContainer>
          <ErrorIcon>
            <XCircle size={64} color="white" />
          </ErrorIcon>
          <ErrorRing />
        </ErrorAnimationContainer>

        <TitleSection>
          <Title>
            Pago{" "}
            <GradientText>
              no procesado
            </GradientText>
          </Title>
          <Subtitle>
            Hubo un problema al procesar tu pago. 
            No te preocupes, no se realizó ningún cargo a tu cuenta.
          </Subtitle>
        </TitleSection>

        {/* Error Details */}
        <ErrorCard>
          <CardContent>
            <ErrorTitle>Posibles causas:</ErrorTitle>
            <CausesList>
              {causes.map((cause, index) => (
                <CauseItem key={index}>
                  <CauseDot />
                  {cause}
                </CauseItem>
              ))}
            </CausesList>
          </CardContent>
        </ErrorCard>

        <ButtonsContainer>
          <PrimaryButton onClick={handleRetry}>
            <RefreshCw size={16} style={{ marginRight: '0.5rem' }} />
            Intentar nuevamente
          </PrimaryButton>
          
          <SecondaryButton onClick={handleSupport}>
            <MessageCircle size={16} style={{ marginRight: '0.5rem' }} />
            Contactar Soporte
          </SecondaryButton>
        </ButtonsContainer>

        <BackButton onClick={() => window.location.href = '/'}>
          <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Volver al inicio
        </BackButton>

        {/* Support Info */}
        <SupportCard>
          <SupportContent>
            <SupportTitle>¿Necesitas ayuda?</SupportTitle>
            <SupportDescription>
              Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier problema de pago.
            </SupportDescription>
            <SupportOptions>
              <SupportOption>
                <MessageCircle size={16} color="#e74c3c" />
                <span>Chat en vivo</span>
              </SupportOption>
              <SupportOption>
                <span>Email: support@itros.ai</span>
              </SupportOption>
              <SupportOption>
                <span>WhatsApp: +1 (555) 123-4567</span>
              </SupportOption>
            </SupportOptions>
          </SupportContent>
        </SupportCard>
      </Content>
    </Container>
  );
}