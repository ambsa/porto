import React from "react";
import Main from "../layouts/Main";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import SkillSection from "../components/skills/SkillSection";
import ProjectSection from "../components/project/ProjectSection";
import ContactSection from "../components/contact/ContactSection";
import { div } from "framer-motion/client";

const Home = () => {
  return (
      <Main>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <SkillSection id="skills" />
      <ProjectSection id="projects" />
      <ContactSection id="contact" />
    </Main>
  );
};

export default Home;


