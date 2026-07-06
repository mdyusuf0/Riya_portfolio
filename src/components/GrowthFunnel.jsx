import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const funnelStages = [
  {
    title: 'Awareness',
    description: 'Content Strategy & Social Media',
    metrics: 'Brand reach and baseline visibility',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  },
  {
    title: 'Engagement',
    description: 'Community Growth & A/B Creative',
    metrics: '30%+ Organic Engagement Growth',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
  },
  {
    title: 'Lead',
    description: 'Audience Targeting & Lead Generation',
    metrics: '1,500+ Qualified Leads Generated',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Conversion',
    description: 'CRO & Landing Strategy',
    metrics: '12% Conversion Rate Optimization',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    title: 'Growth & Scale',
    description: 'ROAS, Analytics & Optimization',
    metrics: '3.5x Average ROAS & $5k+ Ad Spend',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
];

const GrowthFunnel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[var(--color-brand-red)] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            From Attention To Conversion
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            The <span className="font-cursive text-[var(--color-brand-red)] font-normal">Growth</span> Funnel
          </h3>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-border-bright)] via-[var(--color-brand-red)] to-[var(--color-border-bright)] transform -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0">
            {funnelStages.map((stage, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-red)] border-4 border-[var(--color-bg-primary)] shadow-[0_0_15px_var(--color-brand-red-glow)] z-20 hidden md:block" />

                {/* Content Card */}
                <div 
                  data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                  className={`w-full md:w-[45%] glass-panel p-6 rounded-2xl relative group hover:border-[var(--color-brand-red)] transition-colors duration-300 ${
                    idx === funnelStages.length - 1 ? 'border-[var(--color-brand-red)] shadow-[0_0_20px_var(--color-brand-red-glow)]' : ''
                  }`}
                  style={{
                    width: '100%',
                    maxWidth: `${100 - (idx * 5)}%`, // Funnel narrowing effect
                    margin: '0 auto'
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl ${idx === funnelStages.length - 1 ? 'bg-[var(--color-brand-red)] text-white' : 'bg-black/50 text-[var(--color-brand-red)]'}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stage.icon} />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-[var(--color-text-primary)]">{stage.title}</h4>
                  </div>
                  
                  <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                    {stage.description}
                  </p>

                  <div className="pt-4 border-t border-[var(--color-border-soft)]">
                    <span className="text-[var(--color-silver)] text-xs font-bold tracking-widest uppercase">
                      Impact: <span className="text-[var(--color-text-primary)]">{stage.metrics}</span>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthFunnel;
