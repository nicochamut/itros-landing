// Hero.tsx / Hero.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ArrowRight, Play } from "lucide-react";

/* ================= Animations ================= */
const pulse = keyframes`0%,100%{opacity:1}50%{opacity:.5}}`;
const bounce = keyframes`
  0%,20%,53%,80%,100%{transform:translate3d(0,0,0)}
  40%,43%{transform:translate3d(0,-30px,0)}
  70%{transform:translate3d(0,-15px,0)}
  90%{transform:translate3d(0,-4px,0)}
`;

/* ================= Layout base ================= */
const HeroSection = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  top: -4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  overflow: hidden;
  background: #0b0b0b;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

/* === Fondo Spline (ahora recibe eventos de mouse) === */
const SplineLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.92;
  filter: saturate(0.95) contrast(1.05) brightness(0.9);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        1000px 700px at 55% 42%,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.28) 55%,
        rgba(0, 0, 0, 0.52) 100%
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.65) 100%);
    z-index: 2;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 0.45;
    filter: brightness(0.85);
  }

  canvas,
  iframe,
  div {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
`;

/* ================= Fondo sutil ================= */
const BackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;
`;
const PulsingDot1 = styled.div`
  position: absolute;
  top: 25%;
  right: 16.666%;
  width: 0.5rem;
  height: 0.5rem;
  background: #b8bdb5;
  border-radius: 50%;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
const PulsingDot2 = styled.div`
  position: absolute;
  bottom: 33.333%;
  left: 25%;
  width: 0.25rem;
  height: 0.25rem;
  background: #b8bdb5;
  border-radius: 50%;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 1s;
`;
const PulsingDot3 = styled.div`
  position: absolute;
  top: 50%;
  right: 33.333%;
  width: 0.375rem;
  height: 0.375rem;
  background: #fff;
  border-radius: 50%;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 2s;
`;

/* ================= Contenido ================= */
const HeroContent = styled(motion.div)`
  max-width: 150rem;
  /* margin: -6vh auto 0; */
  text-align: center;
  position: relative;
  z-index: 10;

  /* ✅ Deja pasar mousemove hacia Spline sin perder clicks en CTAs */
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  /* background: rgba(224, 224, 224, 0.051); */
  /* filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(6px); */
  padding: 4rem 2rem;
  height: 30rem;
  max-width: 100rem;
  align-items: center;
`;
const HeadlineContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120rem;

  height: 25rem;
`;
const MainHeadline = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0.04em;
  color: #fff;
  width: 100%;

  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  font-family: "Montserrat", sans-serif;
`;
const HighlightText = styled.span`
  font-family: "Montserrat", sans-serif;
`;

const SubHeadline = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.015em;
  color: #cfcfcf;
  max-width: 64rem;
  margin: 0 auto;
  text-wrap: pretty;
  padding: 0.5rem 1rem;
  font-family: "Helvetica Neue", sans-serif;
  &.first {
    font-weight: 600;
    color: #f8f991;
    padding: 0.25rem 2rem;
    letter-spacing: 1.2rem;
    font-size: clamp(1rem, 4vw, 1.1rem);
  }
`;

const CopyGlass = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* padding: clamp(0.5rem, 1vw, 0.75rem) clamp(0.75rem, 1.2vw, 1rem); */

  background: rgba(10, 10, 10, 0.22);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 0.2rem;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  pointer-events: none; /* deja pasar movimientos */
`;

const PrimaryButton = styled.button`
  pointer-events: auto; /* ✅ clickable */
  background: #7cd19d;
  color: #000000;
  padding: 1rem 3rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: 0.25s ease;
  border: none;
  border-radius: 0.125rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 48px;
  box-shadow: 0 0 0 0 rgba(231, 76, 60, 0);
  &:hover {
    background: #e67e22;
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(231, 76, 60, 0.15);
  }
  &:focus-visible {
    outline: 2px solid #e74c3c;
    outline-offset: 2px;
  }
  .arrow-icon {
    margin-left: 0.75rem;
    transition: transform 0.25s;
  }
  &:hover .arrow-icon {
    transform: translateX(0.25rem);
  }
`;

const SecondaryButton = styled.button`
  pointer-events: auto; /* ✅ clickable */
  color: #fff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 3rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: 0.25s ease;
  border-radius: 0.125rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 48px;
  &:hover {
    color: #e74c3c;
    border-color: #e74c3c;
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid #e74c3c;
    outline-offset: 2px;
  }
  .play-icon {
    margin-right: 0.75rem;
    transition: transform 0.25s;
  }
  &:hover .play-icon {
    transform: scale(1.1);
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-top: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const StatItem = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const StatNumber = styled.div`
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 200;
  color: #fff;
  letter-spacing: -0.03em;
`;
const StatLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #8a8a8a;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  pointer-events: none;
`;
const ScrollLine = styled.div`
  width: 1px;
  height: 4rem;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
`;
const ScrollDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin: 0.5rem auto 0;
  animation: ${bounce} 1s infinite;
`;

/* ================= Variants ================= */
const heroVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
};
const contentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
  },
};
const headlineVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
  },
};
const subheadlineVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const ctaVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};
const statsVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
  },
};
const statItemVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= Component ================= */
export function Hero() {
  const stats = [
    {
      number: "",
      label: "Acompañamos cada paso de tu transformación digital.",
    },
    {
      number: "",
      label: "Hablamos tu mismo idioma: tecnología simple y clara.",
    },
    { number: "", label: "Transparencia total en cada proyecto." },
    { number: "", label: "Enfoque 100% personalizado." },
  ];

  const scrollToSolutions = () => {
    const el = document.getElementById("solutions-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection variants={heroVariants} initial="initial" animate="animate">
      {/* Fondo 3D interactivo */}
      <SplineLayer aria-hidden="true">
        <Spline scene="https://prod.spline.design/lYYJ7s4jQc03vEzN/scene.splinecode" />
      </SplineLayer>

      <BackgroundElements>
        <PulsingDot1 />
        <PulsingDot2 />
        <PulsingDot3 />
      </BackgroundElements>

      {/* Contenido estático (mouse move pasa hacia Spline) */}
      <HeroContent variants={contentVariants}>
        <ContentContainer>
          <HeadlineContainer variants={headlineVariants}>
            <SubHeadline className="first">
              INNOVACIÓN CON PROPÓSITO
            </SubHeadline>

            <MainHeadline>
              Transforma tu negocio con el poder de la IA
            </MainHeadline>

            <SubHeadline>
              Tecnología que automatiza, optimiza y hace escalar tu negocio.
            </SubHeadline>
          </HeadlineContainer>

          <CTAContainer variants={ctaVariants}>
            <motion.div variants={statItemVariants}>
              <PrimaryButton
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToSolutions}
              >
                <span>COMENZAR AHORA</span>
                <ArrowRight className="arrow-icon" size={16} />
              </PrimaryButton>
            </motion.div>
          </CTAContainer>

          {/* <StatsGrid variants={statsVariants}>
            {stats.map((s, i) => (
              <StatItem key={i} variants={statItemVariants}>
                <StatNumber>{s.number}</StatNumber>
                <StatLabel>{s.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid> */}
        </ContentContainer>
      </HeroContent>

      <ScrollIndicator>
        <ScrollLine />
        <ScrollDot />
      </ScrollIndicator>
    </HeroSection>
  );
}
