import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

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
                {/* Visual Side */}
                <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="absolute inset-0 bg-[var(--color-brand-red)] translate-x-3 translate-y-3 -z-10"></div>
                  <div className="glass-panel p-2 overflow-hidden">
                    <img 
                      src={`/src/assets/riya/campaigns/${
                        project.id === 'ramadan-campaign' ? 'ramadan-1.jpg' : 
                        project.id === 'diwali-campaign' ? 'diwali-4.jpg' : 'cafe-2.jpg'
                      }`} 
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover transition-transform duration-500 group-hover:rotate-[2deg] group-hover:scale-105"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                  {/* Floating Metric box */}
                  <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-black border border-[var(--color-border-soft)] p-4 shadow-2xl z-20 hidden md:block">
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
