import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-[var(--color-border-soft)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div data-aos="fade-up" className="mb-12 md:mb-20">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight font-display uppercase">
                {aboutContent.heading} <br className="hidden md:block"/>
                <span className="font-cursive text-[var(--color-brand-red)] lowercase block mt-2 text-5xl md:text-7xl">portfolio</span>
              </h3>
            </div>
            <div className="w-16 h-[2px] bg-[var(--color-brand-red)] mb-8"></div>
            
            <p 
              className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />

            <div className="grid grid-cols-2 gap-4">
              {aboutContent.techStack.map((tech, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--color-brand-red)]"></div>
                  <span className="font-mono text-sm uppercase tracking-widest text-white">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative glass-panel p-2 z-10">
              <img 
                src="/src/assets/riya/about-profile.jpg" 
                alt="About" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-64 h-64 border border-[var(--color-brand-red)] rounded-full opacity-20 -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-[var(--color-border-bright)] opacity-50 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
