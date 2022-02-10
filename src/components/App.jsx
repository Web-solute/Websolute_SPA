import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Recruit from './Recruit/Recruit';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, recruitData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [recruit, setRecruit] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setRecruit({ ...recruitData });
    setContact({ ...contactData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, recruit, contact }}>
      <Hero />
      <About />
      <Projects />
      <Recruit />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
