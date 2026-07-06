import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/portfolioData';

const Education = () => {
  return (
    <section className="py-24 border-t border-[var(--color-border-soft)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-2">
            Education
          </h2>
          <p className="text-[var(--color-text-secondary)] font-mono text-xs tracking-widest uppercase">
            // Academic Background
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 border-l-4 border-l-[var(--color-brand-red)] hover:bg-[var(--color-bg-elevated)] transition-colors"
            >
              <span className="inline-block px-2 py-1 bg-[var(--color-border-soft)] text-[10px] font-mono text-white tracking-wider mb-4 uppercase">
                {edu.duration}
              </span>
              <h3 className="text-2xl font-display font-black text-white uppercase mb-2">
                {edu.degree}
              </h3>
              <p className="text-[var(--color-brand-red)] font-mono text-sm tracking-widest uppercase mb-4">
                {edu.institution}
              </p>
              <p className="text-[var(--color-text-secondary)] text-sm">
                {edu.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
