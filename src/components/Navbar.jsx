import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Impact', 'Campaigns', 'Experience', 'Contact'];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-[var(--color-border-soft)] py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="font-display font-black text-2xl tracking-tighter uppercase"
          >
            {personalInfo.name}<span className="text-[var(--color-brand-red)]">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--color-text-secondary)] hover:text-white transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--color-brand-red)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText("Hi Riya, I saw your portfolio and I would like to discuss a freelance opportunity with you!");
                alert("Message copied! Redirecting to LinkedIn...");
                window.open(socialLinks.linkedin, '_blank');
              }}
              className="px-6 py-2 border border-[var(--color-border-bright)] hover:border-[var(--color-brand-red)] bg-transparent hover:bg-[var(--color-brand-red)] text-white text-xs font-mono uppercase tracking-widest transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className="text-3xl font-display font-bold uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-brand-red)] transition-colors"
              >
                {link}
              </a>
            ))}
            
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText("Hi Riya, I saw your portfolio and I would like to discuss a freelance opportunity with you!");
                alert("Message copied! Redirecting to LinkedIn...");
                window.open(socialLinks.linkedin, '_blank');
              }}
              className="mt-8 px-10 py-4 border border-[var(--color-brand-red)] text-[var(--color-brand-red)] font-mono uppercase tracking-widest hover:bg-[var(--color-brand-red)] hover:text-white transition-all"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
