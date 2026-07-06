import React from 'react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../data/portfolioData';

const ImpactPulse = () => {
  return (
    <section id="impact" className="py-24 border-t border-[var(--color-border-soft)] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-2">
              Career Impact
            </h2>
            <p className="text-[var(--color-text-secondary)] font-mono text-xs tracking-widest uppercase">
              // Data-backed growth
            </p>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-[var(--color-brand-red)]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[var(--color-border-soft)] p-px">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-black p-8 flex flex-col justify-center items-center text-center group hover:bg-[var(--color-bg-elevated)] transition-colors ${
                index === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <h3 className="text-4xl md:text-5xl font-display font-black text-white group-hover:text-[var(--color-brand-red)] transition-colors mb-4">
                {metric.value}
              </h3>
              <p className="font-mono text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactPulse;
