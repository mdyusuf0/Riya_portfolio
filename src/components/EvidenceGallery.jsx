import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EvidenceGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Use the extracted screenshots
  const screenshots = [
    { src: '/screenshots/WhatsApp Image 2026-07-06 at 10.25.35 PM (1).jpeg', alt: 'Meta Ads Campaign 1', label: 'Meta Ads Performance' },
    { src: '/screenshots/WhatsApp Image 2026-07-06 at 10.25.35 PM (2).jpeg', alt: 'Meta Ads Campaign 2', label: 'Cost Per Lead Optimization' },
    { src: '/screenshots/WhatsApp Image 2026-07-06 at 10.25.35 PM.jpeg', alt: 'Meta Ads Campaign 3', label: 'Messaging Conversions' },
    { src: '/screenshots/WhatsApp Image 2026-07-06 at 10.25.36 PM (1).jpeg', alt: 'Meta Ads Campaign 4', label: 'ROAS Scaling' },
    { src: '/screenshots/WhatsApp Image 2026-07-06 at 10.25.36 PM (2).jpeg', alt: 'Meta Ads Campaign 5', label: 'Engagement Growth' },
    { src: '/screenshots/WhatsApp Image 2026-07-06 at 10.25.36 PM.jpeg', alt: 'Meta Ads Campaign 6', label: 'Audience Targeting' }
  ];

  return (
    <section id="evidence" className="py-24 bg-[var(--color-bg-deep)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Growth Receipts
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            Campaign <span className="font-cursive text-[var(--color-brand-red)] font-normal">Evidence</span>
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Live dashboards and performance metrics from Meta Ads Manager highlighting targeted scale, low CPA, and robust lead generation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {screenshots.map((item, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="glass-panel p-2 rounded-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[var(--color-brand-red)] group-hover:shadow-[0_10px_30px_var(--color-brand-red-glow)]">
                <div className="relative overflow-hidden rounded-lg aspect-[9/16] bg-black">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                  {/* Blurring the top section for privacy (client names) while keeping metrics visible */}
                  <div className="absolute top-0 left-0 w-full h-[12%] backdrop-blur-xl bg-black/40 border-b border-white/10 flex items-center justify-center">
                     <span className="text-white/50 text-xs tracking-widest font-bold">CLIENT SECURE</span>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 border border-white/30 rounded-full text-white text-xs font-bold tracking-widest backdrop-blur-md">
                      VIEW METRICS
                    </span>
                  </div>
                </div>
                <div className="mt-4 mb-2 text-center">
                  <span className="text-[var(--color-text-primary)] font-bold text-sm tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-lg w-full max-h-[90vh] glass-panel p-2 rounded-2xl flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute -top-4 -right-4 w-10 h-10 bg-[var(--color-brand-red)] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="relative w-full h-full overflow-hidden rounded-xl">
               <img 
                 src={selectedImage.src} 
                 alt={selectedImage.alt} 
                 className="w-full h-auto object-contain max-h-[85vh]"
               />
               {/* Client Name Blur in Modal */}
               <div className="absolute top-0 left-0 w-full h-[10%] backdrop-blur-xl bg-black/60 flex items-center justify-center">
                  <span className="text-white/50 text-xs tracking-widest font-bold">CLIENT SECURE</span>
               </div>
            </div>
            <p className="text-white font-bold tracking-wide mt-4 pb-2">{selectedImage.label}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EvidenceGallery;
