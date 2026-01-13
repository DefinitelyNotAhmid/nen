'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20 dark:from-[#070a10] dark:to-[#0b1324]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/rs%3Dw_3070%2Cm%20(1).webp"
          alt="Luxury real estate in Pahrump, Nevada"
          fill
          priority
          className="object-cover opacity-30 contrast-110 saturate-110"
          sizes="(max-width: 768px) 100vw, 1600px"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm sm:text-base font-semibold text-[#CE1126] uppercase tracking-wide mb-4">
              The Ridge Realty Group
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 dark:text-white">
              Pahrump Realtor — Marci Metzger
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 font-light dark:text-gray-200">
              Trusted Realtor with <span className="numeric font-semibold text-[#0038A8]">$28.5M in Sales</span>
            </p>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
              Nearly 3 decades of expertise helping clients buy, sell, and invest in residential and commercial properties across Pahrump and Nevada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="primary" 
                size="lg" 
                href="#contact"
                ariaLabel="Schedule a showing with Marci Metzger"
              >
                Schedule a Showing
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="tel:+12069196886"
                ariaLabel="Call Marci Metzger at 206-919-6886"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="text-gray-600 hover:text-[#0038A8] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0038A8] dark:text-gray-300"
          aria-label="Scroll to About section"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
