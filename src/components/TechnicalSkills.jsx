import React from 'react';
import { motion } from 'framer-motion';
import { capabilityMatrix } from '../data/portfolioData';

const TechnicalSkills = () => {
  return (
    <section id="capabilities" className="py-24 border-t border-[var(--color-border-soft)] relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute right-[-10%] top-20 w-[500px] h-[500px] rounded-full border border-[var(--color-brand-red)] opacity-10 blur-xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-2">
            Marketing Capability Network
          </h2>
          <p className="text-[var(--color-text-secondary)] font-mono text-xs tracking-widest uppercase">
            // Core Competencies & Systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border-soft)] p-px">
          {capabilityMatrix.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-black p-8 group hover:bg-[var(--color-bg-elevated)] transition-colors h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-brand-red)] text-[var(--color-brand-red)] font-mono text-xs">
                  0{index + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="text-sm font-mono text-[var(--color-text-secondary)] border border-[var(--color-border-bright)] px-3 py-1 bg-transparent group-hover:border-[var(--color-text-muted)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
