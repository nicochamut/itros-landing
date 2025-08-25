import React from "react";
import styled from "styled-components";
import { Brain, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const MainContent = styled.div`
  padding: 4rem 0;
  display: grid;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CompanySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #e74c3c;
  border-radius: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
  color: white;
  letter-spacing: -0.025em;
`;

const CompanyDescription = styled.p`
  color: #8a8a8a;
  font-weight: 200;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ContactText = styled.span`
  font-size: 0.875rem;
  color: #8a8a8a;
  font-weight: 200;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h6`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: white;
  font-weight: 200;
`;

const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SectionLink = styled.button`
  display: block;
  color: #8a8a8a;
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 200;
  text-align: left;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NewsletterDescription = styled.p`
  font-size: 0.875rem;
  color: #8a8a8a;
  font-weight: 200;
  line-height: 1.6;
`;

const NewsletterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const EmailInputContainer = styled.div`
  display: flex;
`;

const EmailInput = styled.input`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: white;
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #8a8a8a;
  }

  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`;

const SubscribeButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 0.75rem 1rem;
  border: none;
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e67e22;
  }
`;

const NewsletterDisclaimer = styled.p`
  font-size: 0.75rem;
  color: #8a8a8a;
  font-weight: 200;
`;

const BottomBar = styled.div`
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #8a8a8a;
  font-weight: 200;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const LegalLink = styled.button`
  font-size: 0.875rem;
  color: #8a8a8a;
  background: none;
  border: none;
  font-weight: 200;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const services = [
  "Consultoría de Estrategia IA",
  "Desarrollo de Modelos Personalizados",
  "Automatización de Procesos",
  "Análisis de Datos",
  "Aprendizaje Automático",
];

const companyLinks = [
  "Sobre Nosotros",
  "Carreras",
  "Blog",
  "Casos de Estudio",
  "Contacto",
];

export function Footer() {
  return (
    <FooterContainer>
      <Container>
        {/* Main footer content */}
        <MainContent>
          {/* Company info */}
          <CompanySection>
            <LogoContainer>
              <LogoIcon>
                <Brain size={20} color="white" />
              </LogoIcon>
              <LogoText>Itros</LogoText>
            </LogoContainer>
            <CompanyDescription>
              Transformando empresas a través de automatización inteligente e
              insights basados en datos.
            </CompanyDescription>
            <ContactInfo>
              <ContactItem>
                <Mail size={16} color="#e74c3c" />
                <ContactText>hola@itros.ai</ContactText>
              </ContactItem>
              <ContactItem>
                <Phone size={16} color="#e74c3c" />
                <ContactText>+34 11 123 4567</ContactText>
              </ContactItem>
              <ContactItem>
                <MapPin size={16} color="#e74c3c" />
                <ContactText>Rosario, Argentina</ContactText>
              </ContactItem>
            </ContactInfo>
          </CompanySection>

          {/* Services */}
          <FooterSection>
            <SectionTitle>Servicios</SectionTitle>
            <SectionList>
              {services.map((service, index) => (
                <SectionLink key={index}>{service}</SectionLink>
              ))}
            </SectionList>
          </FooterSection>

          {/* Company */}
          <FooterSection>
            <SectionTitle>Empresa</SectionTitle>
            <SectionList>
              {companyLinks.map((item, index) => (
                <SectionLink key={index}>{item}</SectionLink>
              ))}
            </SectionList>
          </FooterSection>

          {/* Newsletter */}
          <NewsletterSection>
            <SectionTitle>Mantente Informado</SectionTitle>
            <NewsletterDescription>
              Obtén las últimas perspectivas sobre tendencias de IA y
              desarrollos de la industria.
            </NewsletterDescription>
            <NewsletterForm>
              <EmailInputContainer>
                <EmailInput type="email" placeholder="Ingresa tu email" />
                <SubscribeButton>
                  <ArrowRight size={16} />
                </SubscribeButton>
              </EmailInputContainer>
              <NewsletterDisclaimer>
                Sin spam, cancela en cualquier momento.
              </NewsletterDisclaimer>
            </NewsletterForm>
          </NewsletterSection>
        </MainContent>

        {/* Bottom bar */}
        <BottomBar>
          <Copyright>© 2024 Itros. Todos los derechos reservados.</Copyright>
          <LegalLinks>
            <LegalLink>Política de Privacidad</LegalLink>
            <LegalLink>Términos de Servicio</LegalLink>
            <LegalLink>Política de Cookies</LegalLink>
          </LegalLinks>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
}
