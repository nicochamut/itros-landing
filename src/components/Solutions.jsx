import React from "react";
import styled from "styled-components";
import { Brain, Target, Headphones, ArrowRight } from "lucide-react";

const SolutionsSection = styled.section`
  padding: 8rem 1.5rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 8rem 2rem;
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
`;

const BackgroundCircle1 = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 24rem;
  height: 24rem;
  border: 1px solid rgba(231, 76, 60, 0.2);
  border-radius: 50%;
`;

const BackgroundCircle2 = styled.div`
  position: absolute;
  bottom: 33.333333%;
  right: 25%;
  width: 20rem;
  height: 20rem;
  border: 1px solid rgba(230, 126, 34, 0.2);
  border-radius: 50%;
`;

const BackgroundCircle3 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 31.25rem;
  height: 31.25rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const HeaderSection = styled.div`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OverlineText = styled.h6`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #8a8a8a;
  font-weight: 200;
`;

const MainTitle = styled.h2`
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 200;
  color: white;
  line-height: 1.1;

  @media (min-width: 1024px) {
    font-size: clamp(3rem, 8vw, 4.5rem);
  }
`;

const HighlightText = styled.span`
  color: #e74c3c;
`;

const SolutionsContainer = styled.div`
  position: relative;
`;

const ConnectingLines = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 8rem;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
`;

const HorizontalLine = styled.div`
  width: 8rem;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
`;

const SolutionsGrid = styled.div`
  display: grid;
  gap: 4rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 6rem;
  }
`;

const SolutionItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CircularContainer = styled.div`
  position: relative;
`;

const Circle = styled.div`
  width: 16rem;
  height: 16rem;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  ${SolutionItem}:hover & {
    border-color: rgba(231, 76, 60, 0.4);
    background-color: rgba(231, 76, 60, 0.05);
  }
`;

const CircleContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #e74c3c;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SolutionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 200;
  color: white;
  letter-spacing: 0.15em;
`;

const SolutionSubtitle = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #8a8a8a;
  font-weight: 200;
`;

const ConnectingDot1 = styled.div`
  position: absolute;
  top: 50%;
  right: -2rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgba(231, 76, 60, 0.4);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${SolutionItem}:hover & {
    opacity: 1;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const ConnectingDot2 = styled.div`
  position: absolute;
  top: 50%;
  left: -2rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgba(231, 76, 60, 0.4);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${SolutionItem}:hover & {
    opacity: 1;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const Description = styled.div`
  max-width: 21rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DescriptionText = styled.p`
  color: #8a8a8a;
  font-weight: 200;
  line-height: 1.6;
`;

const LearnMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e74c3c;
  background: none;
  border: none;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 200;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #e67e22;
  }

  .arrow-icon {
    transition: transform 0.3s ease;
  }

  &:hover .arrow-icon {
    transform: translateX(0.25rem);
  }
`;

const BottomSection = styled.div`
  margin-top: 8rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const BottomGrid = styled.div`
  display: grid;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PortfolioTitle = styled.h3`
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: 200;
  color: white;
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: clamp(1.875rem, 4vw, 2.25rem);
  }
`;

const PortfolioDescription = styled.p`
  color: #8a8a8a;
  font-weight: 200;
  line-height: 1.6;
`;

const ViewWorkButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #e74c3c;
  background: none;
  border: none;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 200;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #e67e22;
  }

  .arrow-icon {
    transition: transform 0.3s ease;
  }

  &:hover .arrow-icon {
    transform: translateX(0.25rem);
  }
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProcessItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ProcessNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 200;
  color: #e74c3c;
  transition: color 0.3s ease;

  ${ProcessItem}:hover & {
    color: #e67e22;
  }
`;

const ProcessContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ProcessTitle = styled.h4`
  font-weight: 200;
  color: white;
  transition: color 0.3s ease;

  ${ProcessItem}:hover & {
    color: #e74c3c;
  }
`;

const ProcessDescription = styled.p`
  font-size: 0.875rem;
  color: #8a8a8a;
  font-weight: 200;
`;

const solutions = [
  {
    title: "ESTRATEGIA",
    subtitle: "Descubre más",
    description: "Desarrollamos estrategias integrales de IA adaptadas a tus objetivos empresariales, asegurando integración perfecta con flujos de trabajo existentes y máximo ROI.",
    icon: Target
  },
  {
    title: "CREATIVIDAD",
    subtitle: "Descubre más", 
    description: "Nuestras soluciones creativas de IA mejoran la generación de contenido, automatización de diseño y experiencias de usuario personalizadas en todos los puntos de contacto digitales.",
    icon: Brain
  },
  {
    title: "SOPORTE",
    subtitle: "Descubre más",
    description: "Soporte dedicado 24/7 asegura que tus sistemas de IA operen sin fallas, con monitoreo proactivo y resolución instantánea de problemas.",
    icon: Headphones
  }
];

const processItems = [
  { number: "01", title: "Estrategia de IA", desc: "Marcos de inteligencia personalizados" },
  { number: "02", title: "Implementación", desc: "Integración perfecta de sistemas" },
  { number: "03", title: "Optimización", desc: "Mejora continua del rendimiento" },
  { number: "04", title: "Soporte", desc: "Asociación continua para el éxito" }
];

export function Solutions() {
  return (
    <SolutionsSection id="solutions-section">
      {/* Background geometric elements */}
      <BackgroundElements>
        <BackgroundCircle1 />
        <BackgroundCircle2 />
        <BackgroundCircle3 />
      </BackgroundElements>

      <Container>
        {/* Header */}
        <HeaderSection>
          <HeaderContent>
            <OverlineText>
              Nuestros Servicios
            </OverlineText>
            <MainTitle>
              CÓMO
              <br />
              <HighlightText>TRABAJAMOS</HighlightText>
            </MainTitle>
          </HeaderContent>
        </HeaderSection>

        {/* Circular Solutions Layout */}
        <SolutionsContainer>
          {/* Center connecting lines */}
          <ConnectingLines>
            <VerticalLine />
          </ConnectingLines>
          <ConnectingLines>
            <HorizontalLine />
          </ConnectingLines>

          {/* Solutions Grid */}
          <SolutionsGrid>
            {solutions.map((solution, index) => {
              const SolutionIcon = solution.icon;
              return (
                <SolutionItem key={index}>
                  {/* Circular container */}
                  <CircularContainer>
                    <Circle>
                      <CircleContent>
                        <IconContainer>
                          <SolutionIcon size={32} />
                        </IconContainer>
                        <TitleContainer>
                          <SolutionTitle>
                            {solution.title}
                          </SolutionTitle>
                          <SolutionSubtitle>
                            {solution.subtitle}
                          </SolutionSubtitle>
                        </TitleContainer>
                      </CircleContent>
                    </Circle>
                    
                    {/* Connecting dots */}
                    <ConnectingDot1 />
                    <ConnectingDot2 />
                  </CircularContainer>

                  {/* Description */}
                  <Description>
                    <DescriptionText>
                      {solution.description}
                    </DescriptionText>
                    <LearnMoreButton>
                      Saber Más
                      <ArrowRight className="arrow-icon" size={12} />
                    </LearnMoreButton>
                  </Description>
                </SolutionItem>
              );
            })}
          </SolutionsGrid>
        </SolutionsContainer>

        {/* Bottom section */}
        <BottomSection>
          <BottomGrid>
            <BottomLeft>
              <PortfolioTitle>
                PORTAFOLIO
              </PortfolioTitle>
              <PortfolioDescription>
                Nuestro estudio ayuda a los clientes a volverse más eficientes, ágiles y resilientes, mientras entregamos experiencias excepcionales al cliente y construimos soluciones con impacto duradero.
              </PortfolioDescription>
              <ViewWorkButton>
                Ver Nuestro Trabajo
                <ArrowRight className="arrow-icon" size={16} />
              </ViewWorkButton>
            </BottomLeft>
            
            <BottomRight>
              {processItems.map((item, index) => (
                <ProcessItem key={index}>
                  <ProcessNumber>
                    {item.number}
                  </ProcessNumber>
                  <ProcessContent>
                    <ProcessTitle>
                      {item.title}
                    </ProcessTitle>
                    <ProcessDescription>
                      {item.desc}
                    </ProcessDescription>
                  </ProcessContent>
                </ProcessItem>
              ))}
            </BottomRight>
          </BottomGrid>
        </BottomSection>
      </Container>
    </SolutionsSection>
  );
}