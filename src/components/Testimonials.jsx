import React from "react";
import styled from "styled-components";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = styled.section`
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
  top: 33.333333%;
  right: 0;
  width: 18rem;
  height: 18rem;
  background-color: rgba(231, 76, 60, 0.3);
  border-radius: 50%;
  filter: blur(48px);
`;

const BackgroundBlur2 = styled.div`
  position: absolute;
  bottom: 33.333333%;
  left: 0;
  width: 16rem;
  height: 16rem;
  background-color: rgba(230, 126, 34, 0.2);
  border-radius: 50%;
  filter: blur(48px);
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const HeaderSection = styled.div`
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
  text-wrap: balance;
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
  text-wrap: pretty;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
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
  background: linear-gradient(
    135deg,
    rgba(231, 76, 60, 0.05),
    transparent,
    rgba(230, 126, 34, 0.05)
  );
  opacity: 0;
  transition: opacity 0.5s ease;

  ${TestimonialCard}:hover & {
    opacity: 1;
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

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuoteIcon = styled(Quote)`
  width: 2rem;
  height: 2rem;
  color: rgba(231, 76, 60, 0.5);
  transition: all 0.3s ease;

  ${TestimonialCard}:hover & {
    color: #e74c3c;
    transform: scale(1.1);
  }
`;

const StarsContainer = styled.div`
  display: flex;
  color: rgba(230, 126, 34, 0.6);
  transition: color 0.3s ease;

  ${TestimonialCard}:hover & {
    color: #e67e22;
  }
`;

const StarIcon = styled(Star)`
  width: 1rem;
  height: 1rem;
  fill: currentColor;
`;

const Quotes = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: #8a8a8a;
  font-style: italic;
  transition: color 0.3s ease;

  ${TestimonialCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s ease;

  ${TestimonialCard}:hover & {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;

  ${TestimonialCard}:hover & {
    border-color: rgba(231, 76, 60, 0.5);
    transform: scale(1.1);
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(8px);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.div`
  font-weight: 500;
  color: white;
  transition: color 0.3s ease;

  ${TestimonialCard}:hover & {
    color: #e74c3c;
  }
`;

const AuthorRole = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: #8a8a8a;
  transition: color 0.3s ease;

  ${TestimonialCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const AccentLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(to right, #e74c3c, #e67e22);
  transition: width 0.7s ease;

  ${TestimonialCard}:hover & {
    width: 100%;
  }
`;

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b192?w=400&h=400&fit=crop&crop=face",
    quote:
      "Itros transformó completamente nuestra capacidad de análisis de datos. Los insights que obtenemos ahora nos han permitido aumentar nuestros ingresos en un 40% y optimizar procesos que creíamos imposibles de mejorar.",
  },
  {
    name: "Carlos Mendoza",
    role: "CTO, InnovateLab",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    quote:
      "La implementación fue sorprendentemente sencilla. En menos de una semana teníamos nuestros primeros modelos de IA funcionando perfectamente, y el equipo de soporte nos acompañó en cada paso del proceso.",
  },
  {
    name: "Ana Rodríguez",
    role: "Directora de Datos, DataFlow",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    quote:
      "El soporte técnico es excepcional. Siempre están disponibles para ayudarnos a optimizar nuestros procesos y resolver cualquier duda. La plataforma ha superado todas nuestras expectativas iniciales.",
  },
];

export function Testimonials() {
  return (
    <TestimonialsSection id="testimonials-section">
      {/* Background Effects */}
      <BackgroundEffects>
        <BackgroundBlur1 />
        <BackgroundBlur2 />
      </BackgroundEffects>

      <Container>
        <HeaderSection>
          <HeaderContent>
            <OverlineText>Testimonios</OverlineText>
            <MainTitle>
              LO QUE DICEN
              <br />
              <HighlightText>NUESTROS CLIENTES</HighlightText>
            </MainTitle>
          </HeaderContent>
          <Description>
            Empresas de todo el mundo confían en Itros para impulsar su
            transformación digital con inteligencia artificial de vanguardia y
            resultados comprobados.
          </Description>
        </HeaderSection>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              {/* Gradient hover effect */}
              <CardBackground />

              <CardContent>
                <CardHeader>
                  <QuoteIcon />
                  <StarsContainer>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </StarsContainer>
                </CardHeader>

                <Quotes>"{testimonial.quote}"</Quotes>

                <AuthorSection>
                  <AvatarContainer>
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      {!testimonial.avatar && (
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </AvatarContainer>
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorInfo>
                </AuthorSection>

                {/* Bottom accent line */}
                <AccentLine />
              </CardContent>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
}
