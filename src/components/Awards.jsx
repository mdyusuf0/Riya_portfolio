import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const awards = [
    { src: '/riya/awards/award-1.jpg', alt: 'Certificate of Recognition' },
    { src: '/riya/awards/award-2.jpg', alt: 'INSIDEA Award Recognition' },
    { src: '/riya/awards/award-3.jpg', alt: 'Team Outing & Celebration' },
    { src: '/riya/awards/award-4.png', alt: 'INSIDEA Trophy' },
    { src: '/riya/awards/award-5.jpg', alt: 'Rising Star of the Year' }
  ];

  return (
    <section id="awards" className="py-24 border-t border-[var(--color-border-soft)] relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Highlights
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight font-display uppercase">
            Awards & <span className="font-cursive text-[var(--color-brand-red)] font-normal lowercase">recognition</span>
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
            Moments of achievement, team milestones, and industry recognition during my time at INSIDEA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer glass-panel overflow-hidden h-64 md:h-80 ${index < 2 ? 'md:col-span-3 aspect-video' : 'md:col-span-2'}`}
              onClick={() => setSelectedImage(award)}
            >
              <div className="absolute inset-0 bg-[var(--color-brand-red)]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img 
                src={award.src} 
                alt={award.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="px-4 py-2 bg-black/80 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-bold tracking-widest uppercase">
                  Expand
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[90vh] glass-panel p-2 rounded-2xl flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-brand-red)] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-brand-red-glow)] z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-black">
                 <img 
                   src={selectedImage.src} 
                   alt={selectedImage.alt} 
                   className="w-full h-auto object-contain max-h-[85vh]"
                 />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Awards;
