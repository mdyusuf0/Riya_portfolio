import React, { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyProcess from './components/MyProcess'
import ImpactPulse from './components/ImpactControlRoom' // Reusing filename
import SocialSignal from './components/SocialSignal'
import Projects from './components/Projects' // Case studies
import TechnicalSkills from './components/TechnicalSkills' // Capability Network
import Experience from './components/Experience'
import Awards from './components/Awards'
import Certificates from './components/Certificates' // Credential Index
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorParticles from './components/CursorParticles'
import SocialDock from './components/SocialDock'

function App() {
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);

  return (
    <>
      <CursorParticles />
      <SocialDock />
      <Preloader isHeroVideoLoaded={heroVideoLoaded} />
      <Navbar />
      <Hero onVideoLoaded={() => setHeroVideoLoaded(true)} />
      <ImpactPulse />
      <About />
      <MyProcess />
      <Projects />
      <Experience />
      <Awards />
      <TechnicalSkills />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
