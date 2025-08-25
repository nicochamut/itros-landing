import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Benefits } from "./components/Benefits.jsx";
import { Solutions } from "./components/Solutions.jsx";
import { Testimonials } from "./components/Testimonials.jsx";

import { PaymentSuccess } from "./components/PaymentSuccess.jsx";
import { PaymentFailure } from "./components/PaymentFailure.jsx";
import { PaymentPending } from "./components/PaymentPending.jsx";
import { CTA } from "./components/CTA.jsx";
import { Footer } from "./components/Footer.jsx";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #0f0f0f;
  position: relative;
`;

const BackgroundGradient = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #000000 100%);
  opacity: 0.8;
`;

const GeometricBackground = styled.div`
  position: fixed;
  inset: 0;
  opacity: 0.05;
`;

const GeometricCircle1 = styled.div`
  position: absolute;
  top: 25%;
  right: 25%;
  width: 24rem;
  height: 24rem;
  border: 1px solid rgba(231, 76, 60, 0.2);
  border-radius: 50%;
`;

const GeometricCircle2 = styled.div`
  position: absolute;
  bottom: 33.333333%;
  left: 20%;
  width: 20rem;
  height: 20rem;
  border: 1px solid rgba(230, 126, 34, 0.2);
  border-radius: 50%;
`;

const GeometricCircle3 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37.5rem;
  height: 37.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
`;

export default function App() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;

  // Payment result pages
  if (pathname === "/payment-success") {
    return <PaymentSuccess />;
  }

  if (pathname === "/payment-failure") {
    return <PaymentFailure />;
  }

  if (pathname === "/payment-pending") {
    return <PaymentPending />;
  }

  return (
    <AppContainer>
      <BackgroundGradient />

      <GeometricBackground>
        <GeometricCircle1 />
        <GeometricCircle2 />
        <GeometricCircle3 />
      </GeometricBackground>

      <ContentContainer>
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Solutions />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </ContentContainer>
    </AppContainer>
  );
}
