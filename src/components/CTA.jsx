import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = styled(motion.section)`
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
  top: 25%;
  right: 25%;
  width: 24rem;
  height: 24rem;
  background-color: rgba(231, 76, 60, 0.3);
  border-radius: 50%;
  filter: blur(48px);
`;

const BackgroundBlur2 = styled.div`
  position: absolute;
  bottom: 25%;
  left: 25%;
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

const CTACard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;

const CTAContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeaderSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const Form = styled(motion.form)`
  max-width: 32rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.125rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: -0.01em;
  transition: all 0.3s ease;

  &::placeholder {
    color: #8a8a8a;
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #e74c3c;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SubmitButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: all 0.3s ease;
  border: none;
  border-radius: 0.125rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e67e22;
  }

  .arrow-icon {
    margin-left: 0.75rem;
    transition: transform 0.3s ease;
  }

  &:hover .arrow-icon {
    transform: translateX(0.25rem);
  }
`;

const FormFooter = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: #8a8a8a;
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #8a8a8a;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const FeatureIcon = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: #e74c3c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  ${FeatureItem}:hover & {
    background-color: #e67e22;
  }
`;

const FeatureText = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.01em;
`;

const features = [
  "Implementación en 24 horas",
  "Soporte 24/7 incluido",
  "Garantía de satisfacción",
];

// Variantes de animación para la sección CTA
const sectionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
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
    },
  },
};

// Animación de la tarjeta CTA
const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 40,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

// Animación del contenido
const contentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
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

// Animación del formulario
const formVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animación de las características
const featuresVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

// Animación individual de características
const featureItemVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Animación de elementos del header
const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <CTASection
      id="cta-section"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Effects */}
      <BackgroundEffects>
        <BackgroundBlur1 />
        <BackgroundBlur2 />
      </BackgroundEffects>

      <Container variants={containerVariants}>
        <CTACard
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <CTAContent variants={contentVariants}>
            <HeaderSection variants={headerVariants}>
              <HeaderContent>
                <motion.div variants={itemVariants}>
                  <OverlineText>Comienza Hoy</OverlineText>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <MainTitle>
                    ¿LISTO PARA
                    <br />
                    <HighlightText>TRANSFORMAR</HighlightText>
                    <br />
                    TU NEGOCIO?
                  </MainTitle>
                </motion.div>
              </HeaderContent>

              <motion.div variants={itemVariants}>
                <Description>
                  Comienza tu viaje hacia la inteligencia artificial hoy mismo.
                  Únete a más de 500 empresas que ya confían en Itros para
                  impulsar su crecimiento y revolucionar sus procesos
                  empresariales.
                </Description>
              </motion.div>
            </HeaderSection>

            <Form onSubmit={handleSubmit} variants={formVariants}>
              <InputContainer>
                <EmailInput
                  type="email"
                  placeholder="tu@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <SubmitButton
                  type="submit"
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Comenzar Gratis</span>
                  <ArrowRight className="arrow-icon" size={16} />
                </SubmitButton>
              </InputContainer>
            </Form>

            <FeaturesGrid variants={featuresVariants}>
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  variants={featureItemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <FeatureIcon>
                    <CheckCircle size={10} color="white" />
                  </FeatureIcon>
                  <FeatureText>{feature}</FeatureText>
                </FeatureItem>
              ))}
            </FeaturesGrid>
          </CTAContent>
        </CTACard>
      </Container>
    </CTASection>
  );
}
