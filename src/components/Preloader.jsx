import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = ({ isHeroVideoLoaded }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Minimum visual animation time for the water fill logo (2.2 seconds)
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2200);

    // Fallback maximum loading timeout (4.5 seconds)
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    // Dismiss the loader only when both the minimum time has elapsed and the video signal is loaded
    if (minTimeElapsed && isHeroVideoLoaded) {
      setIsLoading(false);
    }
  }, [minTimeElapsed, isHeroVideoLoaded]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-black z-[100000] flex items-center justify-center border-b border-[var(--color-brand-red)]"
        >
          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-3xl md:text-6xl font-black tracking-widest"
          >
            {/* Background text (empty state) */}
            <div className="text-white/20 font-sans uppercase">
              {personalInfo.brandName}<span className="text-[var(--color-brand-red)] opacity-50">.</span>
            </div>

            {/* Foreground text (water fill state) */}
            <motion.div 
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap font-sans uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
            >
              {personalInfo.brandName}<span className="text-[var(--color-brand-red)]">.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
