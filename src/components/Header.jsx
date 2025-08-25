import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Menu, X } from "lucide-react";

/* ================= Glassy Header ================= */
const HeaderContainer = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 50;
  /* margin: 0.5rem 0; */
  /* background: rgba(12, 12, 12, 0.22); */
  /* backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); */
  /* border: 1px solid rgba(255, 255, 255, 0.06); */
  border-radius: 14px;
  background: transparent;
  border-bottom: 0;
  /* si hacés esto, meté el padding acá y borrá HeaderGlass */
`;

const HeaderContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

/* Capa “glass” que envuelve al contenido del header */
const HeaderGlass = styled.div`
  margin: 0;
  height: 3.75rem;
  border-radius: 14px;
  padding: 0 0.75rem;

  background: linear-gradient(
    to right,
    rgba(44, 44, 44, 0.326),
    rgba(12, 12, 12, 0.22),
    rgba(44, 44, 44, 0.326)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.06);

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    pointer-events: none;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

/* ================= Branding ================= */
const LogoGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  &:hover .logo-icon {
    background-color: #bee9e8;
  }
`;
const LogoIcon = styled(motion.div)`
  width: 2.25rem;
  height: 2.25rem;
  background-color: #bee9e8;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;
const LogoText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02em;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
`;

/* ================= Desktop Nav ================= */
const DesktopNav = styled(motion.nav)`
  display: none;
  align-items: center;
  gap: 2rem;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
const NavButton = styled.button`
  color: #b3bfb8;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: color 0.25s ease;

  &:hover {
    color: #fff;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.4rem;
    height: 1px;
    background: #e74c3c;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.25s ease;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

/* ================= Desktop CTA ================= */
const DesktopCTA = styled(motion.div)`
  display: none;
  align-items: center;
  gap: 1rem;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

/* Botón ghost con glass muy tenue */
const GhostButton = styled.button`
  color: #d0d0d0;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  transition: 0.25s ease;
  cursor: pointer;
  backdrop-filter: blur(6px);
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
  }
`;

/* CTA principal */
const PrimaryButton = styled.button`
  background: #7cd19d;
  color: #000000;
  padding: 0.7rem 1.25rem;
  border: none;
  border-radius: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  cursor: pointer;
  transition: 0.25s ease;
  box-shadow: 0 0 0 0 rgba(236, 78, 32, 0);
  &:hover {
    background: #e67e22;
    transform: translateY(-1px);
    box-shadow: 0 10px 18px rgba(236, 78, 32, 0.18);
  }
  &:focus-visible {
    outline: 2px solid #ec4e20;
    outline-offset: 2px;
  }
`;

/* ================= Mobile ================= */
const MobileMenuButton = styled.button`
  display: block;
  color: #fff;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

/* Menú móvil con glass */
const MobileMenu = styled(motion.div)`
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1rem 0 1.25rem;
  margin-top: 0.5rem;
  background: rgba(12, 12, 12, 0.22);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 14px;
`;

const MobileNavButton = styled.button`
  display: block;
  width: 100%;
  color: #cfcfcf;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  transition: 0.25s ease;
  margin-bottom: 0.75rem;
  cursor: pointer;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  backdrop-filter: blur(6px);
  text-align: left;
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
  }
`;

const MobileNavLink = styled.a`
  display: block;
  color: #cfcfcf;
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  transition: 0.25s ease;
  margin-bottom: 0.75rem;
  &:hover {
    color: #fff;
  }
`;

const MobileCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const MobileGhostButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: #d0d0d0;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s ease;
  backdrop-filter: blur(6px);
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
  }
`;

const MobilePrimaryButton = styled.button`
  background: #e74c3c;
  color: #fff;
  width: 100%;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  transition: 0.25s ease;
  border: none;
  border-radius: 10px;
  padding: 0.9rem 1rem;
  cursor: pointer;
  &:hover {
    background: #e67e22;
  }
`;

/* ================= Animations ================= */
const headerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};
const logoVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const navVariants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};
const ctaVariants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};
const mobileMenuVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};
const mobileItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

/* ================= Component ================= */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderContainer
      variants={headerVariants}
      initial="initial"
      animate="animate"
      $scrolled={scrolled}
    >
      <HeaderContent>
        <HeaderGlass>
          <HeaderInner>
            {/* Logo */}
            <LogoGroup variants={logoVariants}>
              <LogoText>ITRos</LogoText>
            </LogoGroup>

            {/* Navigation - Desktop */}
            <DesktopNav variants={navVariants}>
              <motion.div variants={mobileItemVariants}>
                <NavButton
                  onClick={() =>
                    document
                      .getElementById("solutions-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Servicios
                </NavButton>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <NavButton
                  onClick={() =>
                    document
                      .getElementById("benefits-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Soluciones
                </NavButton>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <NavButton
                  onClick={() =>
                    document
                      .getElementById("testimonials-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Testimonios
                </NavButton>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <NavButton as="a" href="#">
                  Nosotros
                </NavButton>
              </motion.div>
            </DesktopNav>

            {/* CTA - Desktop */}
            <DesktopCTA variants={ctaVariants}>
              <motion.div variants={mobileItemVariants}></motion.div>
              <motion.div variants={mobileItemVariants}>
                <PrimaryButton
                  onClick={() =>
                    document
                      .getElementById("cta-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contactanos
                </PrimaryButton>
              </motion.div>
            </DesktopCTA>

            {/* Mobile menu button */}
            <MobileMenuButton
              onClick={() => setMobileMenuOpen((v) => !v)}
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </MobileMenuButton>
          </HeaderInner>
        </HeaderGlass>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div variants={mobileItemVariants}>
                <MobileNavButton
                  onClick={() => {
                    document
                      .getElementById("solutions-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  Servicios
                </MobileNavButton>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <MobileNavButton
                  onClick={() => {
                    document
                      .getElementById("benefits-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  Soluciones
                </MobileNavButton>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <MobileNavButton
                  onClick={() => {
                    document
                      .getElementById("testimonials-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  Testimonios
                </MobileNavButton>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <MobileNavLink href="#">Nosotros</MobileNavLink>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <MobileCTAContainer>
                  <MobileGhostButton>Iniciar Sesión</MobileGhostButton>
                  <MobilePrimaryButton
                    onClick={() => {
                      document
                        .getElementById("cta-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                  >
                    Comenzar
                  </MobilePrimaryButton>
                </MobileCTAContainer>
              </motion.div>
            </MobileMenu>
          )}
        </AnimatePresence>
      </HeaderContent>
    </HeaderContainer>
  );
}
