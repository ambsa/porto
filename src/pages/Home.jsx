import React from 'react';
import Main from '../layouts/Main';
import HeroSection from '../components/sectionshome/HeroSection';
import AboutSection from '../components/sectionshome/AboutSection';
import SkillSection from '../components/sectionshome/SkillSection';
import ProjectSection from '../components/sectionshome/ProjectSection';
import ContactSection from '../components/sectionshome/ContactSection';

const Home = () => {
  return (
    <Main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </Main>
  );
};

export default Home;