import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/portfolioData';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="credentials" className="py-24 border-t border-[var(--color-border-soft)] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-2">
            Credential Index
          </h2>
          <p className="font-cursive text-[var(--color-brand-red)] text-xl lg:text-2xl mb-2">
            // Learning Archive & Certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.featured.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel group overflow-hidden flex flex-col ${cert.image ? 'cursor-pointer hover:border-[var(--color-brand-red)] transition-colors' : ''}`}
              onClick={() => cert.image && setSelectedCert(cert)}
            >
              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-black relative">
                {cert.image && (
                  <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 group-hover:bg-[var(--color-brand-red)] transition-colors">
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">Preview</span>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                )}

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl filter grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all">{cert.icon}</span>
                  <span className="text-[10px] font-mono text-[var(--color-brand-red)] border border-[var(--color-brand-red)]/40 bg-[var(--color-brand-red)]/10 px-2 py-1 uppercase font-bold tracking-widest rounded-sm">Verified</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white uppercase mb-2 group-hover:text-[var(--color-brand-red)] transition-colors pr-16">
                  {cert.name}
                </h3>
                
                <p className="font-mono text-xs text-[var(--color-border-bright)] uppercase tracking-wider mb-4">
                  {cert.issuer}
                </p>
                
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificate Preview */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full glass-panel p-2 rounded-2xl flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-brand-red)] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-brand-red-glow)] z-10"
                onClick={() => setSelectedCert(null)}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div className="relative w-full overflow-hidden rounded-xl bg-white flex items-center justify-center p-4">
                 <img 
                   src={selectedCert.image} 
                   alt={selectedCert.name} 
                   className="w-full h-auto max-h-[85vh] object-contain"
                 />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
