import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { emailjsConfig, socialLinks, personalInfo } from '../data/portfolioData';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    const textToCopy = `Hi Riya Srivastava,\n\nI came across your portfolio.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setSubmitStatus('Message copied! Redirecting to LinkedIn...');
      setTimeout(() => {
        setIsSubmitting(false);
        form.current.reset();
        window.open(socialLinks.linkedin, '_blank', 'noopener,noreferrer');
      }, 1500);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus('Failed to copy. Please manually message on LinkedIn.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-deep)] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Info */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Connect
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)] tracking-tight mb-6">
            Let's <span className="font-cursive text-[var(--color-brand-red)] font-normal">Collaborate</span>
          </h3>
          <p className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-md leading-relaxed">
            Ready to scale your brand? Drop a message to discuss growth marketing strategies, paid campaigns, or D2C launches.
          </p>

          <div className="space-y-6">
            <a href={socialLinks.email} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[var(--color-brand-red)] transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span className="text-[var(--color-text-primary)] font-bold group-hover:text-[var(--color-brand-red)] transition-colors">{personalInfo.emails.primary}</span>
            </a>

            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[var(--color-brand-red)] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <span className="text-[var(--color-text-primary)] font-bold group-hover:text-[var(--color-brand-red)] transition-colors">LinkedIn Profile</span>
              </a>
            )}
            
            {socialLinks.topmate && (
              <a href={socialLinks.topmate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[var(--color-brand-red)] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                </div>
                <span className="text-[var(--color-text-primary)] font-bold group-hover:text-[var(--color-brand-red)] transition-colors">Book a Call on Topmate</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1" data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail} className="glass-panel p-8 md:p-10 rounded-3xl space-y-6">
            <div>
              <label className="block text-[var(--color-silver)] text-xs font-bold uppercase tracking-widest mb-2">Name</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="w-full bg-black/40 border border-[var(--color-border-soft)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-[var(--color-silver)] text-xs font-bold uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="w-full bg-black/40 border border-[var(--color-border-soft)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-[var(--color-silver)] text-xs font-bold uppercase tracking-widest mb-2">Message</label>
              <textarea 
                name="message" 
                required 
                rows="4" 
                className="w-full bg-black/40 border border-[var(--color-border-soft)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-red)] transition-colors resize-none"
                placeholder="How can I help you scale?"
              ></textarea>
            </div>
            
            {submitStatus && (
              <div className={`p-4 rounded-lg text-sm font-bold ${submitStatus.includes('successfully') ? 'bg-green-900/40 text-green-400 border border-green-500/30' : 'bg-red-900/40 text-red-400 border border-red-500/30'}`}>
                {submitStatus}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-[var(--color-brand-red)] text-white font-bold rounded-lg hover:bg-white hover:text-[var(--color-brand-red)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_var(--color-brand-red-glow)]"
            >
              {isSubmitting ? 'COPYING...' : 'COPY MESSAGE & OPEN LINKEDIN'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
