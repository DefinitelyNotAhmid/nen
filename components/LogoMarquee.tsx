'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function LogoMarquee() {
  const logos: Logo[] = [
    { src: '/ridge.webp', alt: 'The Ridge Realty Group', width: 240, height: 80 },
    { src: '/equal.webp', alt: 'Equal Housing Opportunity', width: 240, height: 80 },
    { src: '/realtor.webp', alt: 'REALTOR®', width: 240, height: 80 },
    { src: '/pahrump.webp', alt: 'Pahrump Valley Chamber of Commerce', width: 240, height: 80 },
  ];

  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;

    const update = () => {
      setIsDark(root.classList.contains('dark'));
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const effectiveDark = mounted && isDark;
  const withPi7 = (src: string) => {
    if (!effectiveDark) return src;
    if (src === '/ridge.webp') return '/Pi7_ridge.webp';
    if (src === '/equal.webp') return '/Pi7_equal.webp';
    if (src === '/realtor.webp') return '/Pi7_realtor.webp';
    if (src === '/pahrump.webp') return '/Pi7_pahrump.webp';
    return src;
  };

  const base = Array.from({ length: 4 }).flatMap(() => logos);
  const repeated = [...base, ...base];

  return (
    <section aria-label="Affiliations">
      <div className="logo-marquee py-8">
        <div className="logo-marquee-track">
          {repeated.map((logo, idx) => {
            const isDuplicate = idx >= repeated.length / 2;
            return (
              <div
                key={`${logo.src}-${idx}`}
                className="logo-marquee-item"
                aria-hidden={isDuplicate}
              >
                <div className="logo-marquee-frame">
                  <Image
                    src={withPi7(logo.src)}
                    alt={isDuplicate ? '' : logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="logo-marquee-image"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
