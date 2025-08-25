import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Brain, Zap, Shield, TrendingUp, Users, Clock } from "lucide-react";

const BenefitsSection = styled(motion.section)`
  padding: 8rem 1.5rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 8rem 2rem;
  }
`;

const BackgroundEffects = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.05;
`;

const BackgroundBlur1 = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  width: 16rem;
  height: 16rem;
  background-color: rgba(231, 76, 60, 0.3);
  border-radius: 50%;
  filter: blur(48px);
`;

const BackgroundBlur2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 25%;
  width: 20rem;
  height: 20rem;
  background-color: rgba(230, 126, 34, 0.2);
  border-radius: 50%;
  filter: blur(48px);
`;

const Container = styled(motion.div)`
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const HeaderSection = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 6rem;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OverlineText = styled.h6`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #8a8a8a;
`;

const MainTitle = styled.h2`
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 200;
  line-height: 1.1;
  letter-spacing: -0.03em;

  color: white;
`;

const HighlightText = styled.span`
  color: #e74c3c;
`;

const Description = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.015em;
  color: #8a8a8a;
  max-width: 48rem;
  margin: 0 auto;
`;

const BenefitsGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitCard = styled(motion.div)`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 0.5rem;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-0.5rem);
  }
`;

const CardBackground = styled.div`
  position: absolute;
  inset: 0;
  background: ${(props) => props.gradient};
  opacity: 0;
  transition: opacity 0.5s ease;

  ${BenefitCard}:hover & {
    opacity: 0.05;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 10;
`;

const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.gradient};
  border-radius: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  ${BenefitCard}:hover & {
    transform: scale(1.1);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: white;
  transition: color 0.3s ease;

  ${BenefitCard}:hover & {
    color: #e74c3c;
  }
`;

const BenefitDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: #8a8a8a;
  transition: color 0.3s ease;

  ${BenefitCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const HoverLine = styled.div`
  height: 1px;
  width: 0;
  background: ${(props) => props.gradient};
  transition: width 0.5s ease;

  ${BenefitCard}:hover & {
    width: 100%;
  }
`;

const benefits = [
  {
    icon: Brain,
    title: "IA Inteligente",
    description:
      "Algoritmos de machine learning que aprenden y se adaptan continuamente a tus necesidades empresariales específicas.",
    gradient: "linear-gradient(135deg, #e74c3c, #e67e22)",
  },
  {
    icon: Zap,
    title: "Procesamiento Rápido",
    description:
      "Análisis de datos en tiempo real con velocidades de procesamiento hasta 10x más rápidas que soluciones tradicionales.",
    gradient: "linear-gradient(135deg, #e67e22, #f1c40f)",
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description:
      "Protección de datos de nivel empresarial con encriptación end-to-end y cumplimiento total de GDPR y estándares internacionales.",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    icon: TrendingUp,
    title: "Análisis Predictivo",
    description:
      "Predicciones precisas basadas en datos históricos que te ayudan a tomar decisiones estratégicas informadas.",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Herramientas diseñadas para equipos distribuidos, facilitando la colaboración y el intercambio de insights en tiempo real.",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description:
      "Sistemas siempre activos con monitoreo continuo y soporte técnico especializado disponible las 24 horas del día.",
    gradient: "linear-gradient(135deg, #3b82f6, #6366f1)",
  },
];

// Variantes de animación para la sección Benefits
const sectionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

// Animación del contenedor principal
const containerVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

// Animación del header
const headerVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

// Animación de la grilla
const gridVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

// Animación de cada card
const cardVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animación hover para las cards
const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export function Benefits() {
  return (
    <BenefitsSection
      id="benefits-section"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Effects */}
      <BackgroundEffects>
        <BackgroundBlur1 />
        <BackgroundBlur2 />
      </BackgroundEffects>

      <Container variants={containerVariants}>
        <HeaderSection variants={headerVariants}>
          <HeaderContent>
            <motion.div variants={cardVariants}>
              <OverlineText>Beneficios</OverlineText>
            </motion.div>
            <motion.div variants={cardVariants}>
              <MainTitle>
                POR QUÉ ELEGIR
                <br />
                <HighlightText> ITRos</HighlightText>
              </MainTitle>
            </motion.div>
          </HeaderContent>
          <motion.div variants={cardVariants}>
            <Description>
              Descubre cómo nuestras soluciones de inteligencia artificial
              pueden transformar tu empresa y llevarte al siguiente nivel de
              eficiencia, productividad e innovación.
            </Description>
          </motion.div>
        </HeaderSection>

        <BenefitsGrid variants={gridVariants}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <BenefitCard
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Animated background gradient */}
                <CardBackground gradient={benefit.gradient} />

                <CardContent>
                  <IconContainer gradient={benefit.gradient}>
                    <Icon size={24} color="white" />
                  </IconContainer>
                  <TextContent>
                    <BenefitTitle>{benefit.title}</BenefitTitle>
                    <BenefitDescription>
                      {benefit.description}
                    </BenefitDescription>
                  </TextContent>

                  {/* Hover effect line */}
                  <HoverLine gradient={benefit.gradient} />
                </CardContent>
              </BenefitCard>
            );
          })}
        </BenefitsGrid>
      </Container>
    </BenefitsSection>
  );
}
