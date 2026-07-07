import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';

const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group w-full h-full">
      <div className="overflow-hidden relative aspect-video glass-panel p-2">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={`/src/assets/riya/campaigns/${images[currentIndex]}`}
            alt={`${title} - image ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-contain"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 border border-[var(--color-border-bright)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--color-brand-red)] hover:border-[var(--color-brand-red)] shadow-lg z-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 border border-[var(--color-border-bright)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--color-brand-red)] hover:border-[var(--color-brand-red)] shadow-lg z-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[var(--color-brand-red)] w-6' : 'bg-white/40 w-1.5'}`}></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="campaigns" className="py-24 border-t border-[var(--color-border-soft)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-2">
            Featured Campaigns
          </h2>
          <p className="text-[var(--color-brand-red)] font-cursive text-xl lg:text-2xl mb-2">
            // Strategy, Execution & Outcomes
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
              >
                {/* Visual Side (Slider) */}
                <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'} w-full`}>
                  <div className="absolute inset-0 bg-[var(--color-brand-red)] translate-x-3 translate-y-3 -z-10 hidden md:block"></div>
                  
                  {/* EDIT YOUR IMAGES HERE! Modify the arrays below to add, remove, or reorder images for each campaign. */}
                  <ProjectCarousel 
                    images={
                      project.id === 'ramadan-campaign' ? ['ramadan-1.jpg', 'ramadan-2.jpg'] :
                      project.id === 'diwali-campaign' ? ['diwali-new-1.jpg', 'diwali-new-2.jpg'] :
                      ['cafe-2.jpg', 'cafe-1.jpg', 'cafe-3.jpg']
                    }
                    title={project.title}
                  />

                  {/* Floating Metric box */}
                  <div className="absolute -bottom-2 -right-2 md:-bottom-6 md:-right-6 bg-black border border-[var(--color-border-soft)] p-4 shadow-2xl z-40 hidden md:block">
                    <p className="text-[var(--color-brand-red)] font-display font-black text-2xl">{project.number}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-5 flex flex-col gap-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="inline-block px-3 py-1 border border-[var(--color-border-soft)] text-xs font-mono text-[var(--color-text-secondary)] uppercase tracking-wider mb-4">
                      {project.badge}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techTags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-white bg-[var(--color-bg-elevated)] px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 w-12 h-[1px] bg-[var(--color-brand-red)]"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
