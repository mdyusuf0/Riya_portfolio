import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const funnelStages = [
  {
    title: 'Discover & Scope',
    description: 'Understanding the brand, auditing current presence, and analyzing competitors.',
  },
  {
    title: 'Strategize & Plan',
    description: 'Creating content calendars, defining brand voice, and mapping out campaigns.',
  },
  {
    title: 'Create & Design',
    description: 'Scripting reels, styling aesthetics, and producing high-quality content.',
  },
  {
    title: 'Engage & Grow',
    description: 'Community management, influencer outreach, and running targeted ads.',
  },
  {
    title: 'Analyze & Optimize',
    description: 'Tracking ROI, measuring reach, and iterating based on performance metrics.',
  }
];

const MyProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(var(--color-border-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-soft) 1px, transparent 1px)', 
          backgroundSize: '80px 80px' 
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8">
        
        {/* Left Side: Sticky Content */}
        <div className="lg:w-1/3 relative z-20">
          <div className="sticky top-32">
            <div 
              data-aos="fade-right"
              className="inline-flex items-center px-5 py-2 rounded-full border border-[var(--color-border-bright)] bg-transparent backdrop-blur-sm text-[var(--color-silver)] text-xs font-bold tracking-widest uppercase mb-8"
            >
              My Process
            </div>
            
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white font-display leading-[1.05] tracking-tight mb-8"
            >
              Building<br />
              Digital<br />
              Presence in<br />
              Motion
            </h2>
            
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed max-w-sm"
            >
              I follow a structured, data-first approach to analyze brands, construct engaging campaigns, and scale social media presence.
            </p>

            {/* Connecting Arc SVG to First Card (Desktop Only) */}
            <svg className="hidden lg:block absolute -right-24 top-1/2 w-48 h-48 pointer-events-none text-[var(--color-border-bright)]" fill="none" viewBox="0 0 100 100">
              <path d="M10,90 Q50,0 100,20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M90,15 L100,20 L95,28" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Right Side: Floating Cards */}
        <div className="lg:w-2/3 flex flex-col items-center gap-16 md:gap-24 lg:pt-20">
          {funnelStages.map((stage, idx) => {
            const isRed = idx % 2 === 0;
            const rotateClass = isRed ? 'rotate-[-3deg] md:rotate-[-5deg]' : 'rotate-[3deg] md:rotate-[5deg]';
            const alignClass = isRed ? 'ml-auto' : 'mr-auto';
            const bgClass = isRed ? 'bg-[var(--color-brand-red)]' : 'bg-[#0a0a0a] border border-[var(--color-border-soft)]';
            const innerBorderClass = isRed ? 'border-white/30' : 'border-white/5';
            const numClass = isRed ? 'text-white' : 'text-[var(--color-brand-red)]';
            const textClass = 'text-white';
            const descClass = isRed ? 'text-white/90' : 'text-[var(--color-text-secondary)]';

            return (
              <div 
                key={idx} 
                data-aos={isRed ? "fade-left" : "fade-right"} 
                className={`relative w-full max-w-[500px] ${rotateClass} transition-transform hover:rotate-0 duration-500 ease-out z-10 ${alignClass}`}
              >
                {/* Connecting Curved Line between cards */}
                {idx !== funnelStages.length - 1 && (
                  <svg className="absolute -bottom-24 left-1/2 w-32 h-32 pointer-events-none text-[var(--color-border-soft)] -translate-x-1/2 z-[-1]" fill="none" viewBox="0 0 100 100">
                    <path d={isRed ? "M50,10 Q20,50 50,90" : "M50,10 Q80,50 50,90"} stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                  </svg>
                )}

                {/* The Sticky Note Card */}
                <div className={`relative p-8 md:p-12 rounded-[32px] ${bgClass} shadow-2xl`}>
                  {/* Inner Layer Border */}
                  <div className={`absolute inset-2 md:inset-3 rounded-[24px] border-[2px] ${innerBorderClass} pointer-events-none`}></div>
                  
                  {/* Top Pin/Dot */}
                  <div className="absolute top-4 md:top-5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white/20 border-2 border-white/50 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                  </div>

                  <div className="mt-4 md:mt-6">
                    <span className={`block font-cursive text-3xl md:text-4xl font-bold mb-4 ${numClass}`}>
                      0{idx + 1}
                    </span>
                    <h3 className={`text-3xl md:text-4xl font-black font-display tracking-tight mb-4 ${textClass}`}>
                      {stage.title}
                    </h3>
                    <p className={`text-base md:text-lg leading-relaxed ${descClass}`}>
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyProcess;
