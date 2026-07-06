import React from 'react';
import { motion } from 'framer-motion';

const SocialSignal = () => {
  const nodes = [
    { label: "Audience Research", icon: "01" },
    { label: "Content Strategy", icon: "02" },
    { label: "Creative Production", icon: "03" },
    { label: "Distribution", icon: "04" },
    { label: "Community", icon: "05" },
    { label: "Performance Analysis", icon: "06" }
  ];

  return (
    <section id="social-signal" className="py-24 border-t border-[var(--color-border-soft)] relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-2">
            Social Signal System
          </h2>
          <p className="text-[var(--color-text-secondary)] font-mono text-xs tracking-widest uppercase">
            // Strategy-to-Growth Campaign Journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
            {/* Connecting Line Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[var(--color-border-bright)] -z-10 -translate-y-1/2"></div>
            
            {/* Connecting Line Mobile */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-border-bright)] -z-10 -translate-x-1/2"></div>

            {nodes.map((node, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--color-bg-elevated)] border-2 border-[var(--color-border-soft)] flex items-center justify-center rounded-sm group-hover:border-[var(--color-brand-red)] group-hover:bg-[var(--color-brand-red)] transition-all duration-300 z-10 relative">
                  <span className="font-mono text-sm md:text-base font-bold text-white transition-colors">{node.icon}</span>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-sm border border-[var(--color-brand-red)] opacity-0 group-hover:animate-ping"></div>
                </div>
                <div className="mt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity absolute md:relative left-16 md:left-auto top-3 md:top-auto whitespace-nowrap md:whitespace-normal bg-black md:bg-transparent px-3 md:px-0 border md:border-none border-[var(--color-border-soft)]">
                  <p className="text-[10px] md:text-xs font-mono text-white tracking-widest uppercase text-center w-24">
                    {node.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSignal;
