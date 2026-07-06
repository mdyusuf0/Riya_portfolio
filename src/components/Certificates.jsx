import React from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/portfolioData';

const Certificates = () => {
  return (
    <section id="credentials" className="py-24 border-t border-[var(--color-border-soft)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-2">
            Credential Index
          </h2>
          <p className="text-[var(--color-text-secondary)] font-mono text-xs tracking-widest uppercase">
            // Learning Archive & Certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border-soft)] p-px">
          {certificates.featured.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-8 group hover:bg-[var(--color-bg-elevated)] transition-all h-full flex flex-col"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl filter grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all">{cert.icon}</span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] border border-[var(--color-border-soft)] px-2 py-1 uppercase">Verified</span>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white uppercase mb-2 group-hover:text-[var(--color-brand-red)] transition-colors">
                {cert.name}
              </h3>
              
              <p className="font-mono text-xs text-[var(--color-brand-red)] uppercase tracking-wider mb-4">
                {cert.issuer}
              </p>
              
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
