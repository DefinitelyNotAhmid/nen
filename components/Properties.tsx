'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Properties() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const properties = [
    {
      id: 1,
      image: '/cr=w_1200,h_600.webp',
      title: 'Spacious Suburban House',
      location: 'Pahrump, NV',
      beds: 4,
      baths: 3,
      sqft: '2,500',
      type: 'Residential'
    },
    {
      id: 2,
      image: '/rs=w_984,h_655.webp',
      title: 'Luxury Downtown Apartment',
      location: 'Las Vegas, NV',
      beds: 2,
      baths: 2,
      sqft: '1,200',
      type: 'Residential'
    },
    {
      id: 3,
      image: '/rs=w_984,h_655%20(1).webp',
      title: 'Commercial Retail Space',
      location: 'Henderson, NV',
      beds: null,
      baths: null,
      sqft: '3,000',
      type: 'Commercial'
    },
    {
      id: 4,
      image: '/rs=w_984,h_655%20(2).webp',
      title: 'Modern Family Home',
      location: 'Pahrump, NV',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      type: 'Residential'
    },
    {
      id: 5,
      image: '/rs=w_984,h_656.webp',
      title: 'Investment Property',
      location: 'Pahrump, NV',
      beds: 3,
      baths: 2,
      sqft: '1,600',
      type: 'Residential'
    },
    {
      id: 6,
      image: '/rs=w_984,h_656%20(1).webp',
      title: 'Office Building',
      location: 'Las Vegas, NV',
      beds: null,
      baths: null,
      sqft: '8,500',
      type: 'Commercial'
    }
  ];

  const len = properties.length;

  const go = (delta: number) => {
    setActiveIndex((prev) => ((prev + delta) % len + len) % len);
  };

  const getOffset = (index: number) => {
    const diff = index - activeIndex;
    const alt = diff > 0 ? diff - len : diff + len;
    const signed = Math.abs(alt) < Math.abs(diff) ? alt : diff;
    if (signed > 2) return 3;
    if (signed < -2) return -3;
    return signed;
  };

  const slides = properties.map((p, index) => ({
    property: p,
    index,
    offset: getOffset(index)
  }));

  useEffect(() => {
    if (!modalImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImage(null);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [modalImage]);

  return (
    <section id="properties" className="py-20 bg-white dark:bg-[#070a10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
              Properties Gallery
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Explore our selection of finest properties across Nevada
            </p>
          </div>

          <div className="property-coverflow" aria-label="Featured properties carousel">
            <button
              type="button"
              onClick={() => go(-1)}
              className="property-coverflow-btn property-coverflow-btn-left"
              aria-label="Previous property"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="property-coverflow-stage" role="list">
              {slides.map(({ property, index, offset }) => (
                <button
                  key={property.id}
                  type="button"
                  className="property-coverflow-card"
                  data-offset={offset}
                  aria-label="Property photo"
                  aria-current={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="property-coverflow-card-inner bg-white rounded-lg shadow-md overflow-hidden dark:bg-[#0b1220] dark:border dark:border-white/10 dark:shadow-black/30">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={property.image}
                        alt="Property photo"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 55vw, 480px"
                        quality={100}
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-[#0038A8] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {property.type}
                      </div>
                    </div>

                    <div className="p-6 text-left">
                      <p className="text-gray-600 mb-4 flex items-center dark:text-gray-300">
                        <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {property.location}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 dark:text-gray-300">
                        {property.beds && (
                          <span className="numeric flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            {property.beds} Beds
                          </span>
                        )}
                        {property.baths && (
                          <span className="numeric flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            {property.baths} Baths
                          </span>
                        )}
                        <span className="numeric flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                          </svg>
                          {property.sqft} sqft
                        </span>
                      </div>

                      <a
                        href="#"
                        className="block w-full text-center px-4 py-2 bg-[#0038A8] text-white font-semibold rounded-lg hover:bg-[#002d8a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0038A8]"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setModalImage(property.image);
                        }}
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="property-coverflow-btn property-coverflow-btn-right"
              aria-label="Next property"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {modalImage && (
            <div
              className="property-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Property image"
              onClick={() => setModalImage(null)}
            >
              <div className="property-modal-panel" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="property-modal-close"
                  aria-label="Close"
                  onClick={() => setModalImage(null)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={modalImage}
                    alt="Property image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 94vw, 900px"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="#search"
              className="inline-flex items-center px-8 py-4 bg-[#CE1126] text-white font-semibold rounded-lg hover:bg-[#b00f20] transition-colors shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CE1126] dark:shadow-black/30"
            >
              View All Listings
              <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
