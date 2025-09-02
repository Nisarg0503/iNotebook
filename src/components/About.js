import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #1e293b 100%);
  padding: 4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Section = styled.div`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 116, 139, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-4px);
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #a78bfa;
  margin-bottom: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SectionText = styled.p`
  color: rgba(226, 232, 240, 0.9);
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <MainHeading>About Us</MainHeading>

        <SectionsGrid>
          <Section>
            <SectionHeading>Our Mission</SectionHeading>
            <SectionText>
              We are dedicated to creating innovative solutions that empower
              individuals and businesses to achieve their full potential.
              Through cutting-edge technology and thoughtful design, we strive
              to make complex problems simple and accessible for everyone.
            </SectionText>
          </Section>

          <Section>
            <SectionHeading>Our Vision</SectionHeading>
            <SectionText>
              We envision a future where technology seamlessly integrates into
              daily life, enhancing productivity and creativity while fostering
              meaningful connections. Our goal is to be at the forefront of this
              transformation, building tools that inspire and enable positive
              change.
            </SectionText>
          </Section>

          <Section>
            <SectionHeading>Our Team</SectionHeading>
            <SectionText>
              Our diverse team of passionate professionals brings together
              expertise from various fields including software development,
              design, and user experience. We believe that great products are
              born from collaboration, creativity, and a shared commitment to
              excellence.
            </SectionText>
          </Section>
        </SectionsGrid>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
