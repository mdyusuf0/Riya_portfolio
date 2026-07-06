import React from 'react';
import { socialLinks } from '../data/portfolioData';

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const TopmateIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 2.71 1.446 4.7 1.447 5.484 0 9.948-4.414 9.95-9.845.002-2.63-1.019-5.101-2.876-6.96C16.505 1.936 14.04 .917 11.416.917c-5.49 0-9.956 4.417-9.958 9.848-.001 2.224.58 4.023 1.547 5.65L2.012 20.25l4.635-1.096z"/>
  </svg>
);


const SocialDock = () => {
  return (
    <>
      <div 
        data-aos="fade-left"
        data-aos-delay="600"
        className="hidden lg:flex flex-col gap-6 fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-black/60 backdrop-blur-md border border-[var(--color-border-soft)] p-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] items-center"
      >
        {socialLinks.linkedin && (
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-all duration-300 transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        )}
        {socialLinks.topmate && (
          <a 
            href={socialLinks.topmate} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-all duration-300 transform hover:scale-125"
            aria-label="Topmate"
          >
            <TopmateIcon />
          </a>
        )}
        {socialLinks.whatsapp && (
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-all duration-300 transform hover:scale-125"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        )}
        {socialLinks.email && (
          <a 
            href={socialLinks.email} 
            className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-all duration-300 transform hover:scale-125"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        )}
      </div>

      <div 
        className="flex lg:hidden flex-row justify-around items-center gap-6 fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] bg-black/90 backdrop-blur-lg border border-[var(--color-border-soft)] px-8 py-3.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-[85%] max-w-[320px] transition-all duration-300"
      >
        {socialLinks.linkedin && (
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-all active:scale-95 p-1"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        )}
        {socialLinks.topmate && (
          <a 
            href={socialLinks.topmate} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-all active:scale-95 p-1"
            aria-label="Topmate"
          >
            <TopmateIcon />
          </a>
        )}
        {socialLinks.whatsapp && (
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-all active:scale-95 p-1"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        )}
        {socialLinks.email && (
          <a 
            href={socialLinks.email} 
            className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-all active:scale-95 p-1"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        )}
      </div>
    </>
  );
};

export default SocialDock;
