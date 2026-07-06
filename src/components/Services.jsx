import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { processContent } from '../data/portfolioData';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="process" className="py-24 bg-[var(--color-bg-primary)] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-brand-red)] text-[var(--color-brand-red)] text-xs font-bold tracking-widest uppercase mb-6">
            {processContent.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6">
            {processContent.heading}
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {processContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processContent.cards.map((card, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="glass-panel p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] mb-4 group-hover:[-webkit-text-stroke:1px_var(--color-brand-red)] transition-all">
                {card.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-2xl font-cursive text-[var(--color-brand-red)]">{processContent.endText}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
