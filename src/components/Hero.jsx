import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, socialLinks, impactMetrics } from '../data/portfolioData';

const Hero = ({ onVideoLoaded }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleVideoLoad = () => {
    if (!isVideoReady) {
      setIsVideoReady(true);
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 2) { 
        handleVideoLoad();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused || isMuted) {
        // Unmute and play
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay or play was blocked:", err);
        });
      } else {
        // Pause and mute
        videoRef.current.pause();
        videoRef.current.muted = true;
        setIsMuted(true);
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[var(--color-bg-deep)]">
      {/* Background Poster */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('/hero-image.png')`,
          backgroundPosition: 'center'
        }}
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isVideoReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectPosition: 'center' }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient mask exactly like Ahmed */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent z-10" />

      {/* Floating Live Growth Signals (Impact Metrics) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block">
        {impactMetrics.map((metric, idx) => {
          return (
            <div 
              key={idx}
              className={`absolute glass-panel px-3 py-1.5 rounded-full flex flex-col items-center justify-center animate-float shadow-lg border border-white bg-white/10`}
              style={{
                top: `${15 + (idx * 15)}%`,
                right: `${5 + (idx % 2 === 0 ? 10 : 25)}%`,
                animationDelay: `${idx * 1.5}s`
              }}
            >
              <span className={`text-white font-black text-base md:text-lg`}>{metric.value}</span>
              <span className={`text-white font-bold tracking-widest uppercase text-[8px] md:text-[10px]`}>{metric.label}</span>
            </div>
          );
        })}
      </div>

      {/* Content Container (Exactly like Ahmed's layout & placement) */}
      <div className="absolute inset-0 z-20 pl-4 pr-6 pt-28 md:pt-36 pb-12 md:pb-12 md:pl-8 md:pr-12 w-full h-full flex flex-col justify-between items-start text-left">
        
        {/* Top/Left Side */}
        <div className="flex flex-col items-start text-left max-w-xl w-full">
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight leading-[1.1] font-sans"
          >
            {heroContent.greeting} 
            <span className="font-cursive text-[var(--color-brand-red)] block mt-1 text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
              {personalInfo.brandName}
            </span>
          </h1>

          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-xs md:text-sm font-bold max-w-lg drop-shadow-md leading-relaxed mb-6"
          >
            {heroContent.subtitle}
          </p>

          <button 
            onClick={() => {
              navigator.clipboard.writeText("Hi Riya, I saw your portfolio and I would like to discuss a freelance opportunity with you!");
              alert("Message copied! Redirecting to LinkedIn...");
              window.open(socialLinks.linkedin, '_blank');
            }}
            data-aos="fade-up"
            data-aos-delay="300"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-500 bg-green-500/10 backdrop-blur-sm hover:bg-green-500/20 transition-colors z-30 group cursor-pointer"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-green-500 tracking-widest uppercase font-bold group-hover:text-green-400 transition-colors">
              Available for Freelance
            </span>
          </button>
        </div>

        {/* Bottom Buttons Container */}
        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-row flex-wrap items-center gap-2 w-full mt-auto"
        >
          <a 
            href={heroContent.ctaPrimary.href}
            className="px-4 py-2 text-[10px] md:text-xs rounded-full bg-[var(--color-brand-red)] text-white font-bold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_var(--color-brand-red-glow)]"
          >
            {heroContent.ctaPrimary.text}
          </a>
          
          <a 
            href={heroContent.ctaSecondary.href}
            className="px-4 py-2 text-[10px] md:text-xs rounded-full bg-transparent border border-white/60 text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            {heroContent.ctaSecondary.text}
          </a>

          <a 
            href={heroContent.ctaResume.href}
            download="Riya_Srivastava_Resume.pdf"
            className="px-4 py-2 text-[10px] md:text-xs rounded-full bg-transparent border border-white/60 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {heroContent.ctaResume.text}
          </a>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="absolute bottom-6 right-16 md:bottom-8 md:right-32 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group z-20"
          onClick={toggleVideo}
        >
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-[var(--color-border-bright)] bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[var(--color-brand-red)] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_40px_var(--color-brand-red-glow)]">
            {!isPlaying ? (
              <svg className="w-4 h-4 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-[var(--color-silver)] text-[8px] md:text-[10px] font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity group-hover:text-white">
            {!isPlaying ? "Play Reel" : "Pause"}
          </span>
        </div>
      </div>

      {/* Bouncing Arrow exactly like Ahmed */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-lg" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
