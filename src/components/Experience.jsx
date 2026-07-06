import React from 'react';
import { motion } from 'framer-motion';
import { experienceList } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-[var(--color-border-soft)] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-2">
            Professional Experience
          </h2>
          <p className="text-[var(--color-text-secondary)] font-mono text-xs tracking-widest uppercase">
            // The Journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Red Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border-bright)] -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {experienceList.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-8 items-start`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-[var(--color-brand-red)] -translate-x-1/2 top-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                    <span className="inline-block px-3 py-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border-soft)] text-xs font-mono text-[var(--color-brand-red)] mb-4">
                      {exp.duration}
                    </span>
                    
                    <h3 className="text-2xl font-display font-black text-white uppercase mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-[var(--color-text-secondary)] font-medium mb-4">
                      {exp.organization} <span className="text-[var(--color-border-bright)]">|</span> <span className="text-[var(--color-text-muted)] text-sm">{exp.location}</span>
                    </h4>
                    
                    <ul className="space-y-3 mb-6 flex flex-col items-start md:items-stretch">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className={`text-sm text-[var(--color-text-secondary)] flex gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <span className="text-[var(--color-brand-red)] mt-1">▸</span>
                          <span className={isEven ? 'md:text-right' : 'text-left'}>{resp}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.tech.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-[var(--color-text-muted)] border border-[var(--color-border-soft)] px-2 py-1 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
