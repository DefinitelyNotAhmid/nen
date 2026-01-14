'use client';

import Reveal from './Reveal';

export default function LocationMap() {
  const address = '3190 HW-160, Suite F, Pahrump, NV 89048, United States';
  const directionsUrl =
    'https://www.google.com/maps?daddr=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States';
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="location" className="py-20 bg-white dark:bg-[#070a10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal from="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 dark:text-white">
                Our Location
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                3190 HW-160, Suite F, Pahrump, NV 89048
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-5 items-stretch">
            <Reveal from="up" className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg dark:bg-[#0b1220] dark:border-white/10 dark:shadow-black/30">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
                  <iframe
                    title="Google Map - Marci Metzger Office"
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>

            <Reveal from="up" delayMs={120} className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:bg-[#0b1220] dark:border-white/10 dark:shadow-black/30">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Office Address</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Visit us or get directions in seconds.</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0038A8]/10 text-[#0038A8] dark:bg-white/10 dark:text-white" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z" />
                      <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#0038A8] dark:text-white" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" />
                        <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </span>
                    <div className="text-sm text-gray-700 leading-relaxed dark:text-gray-200">
                      <p className="font-semibold text-gray-900 dark:text-white">3190 HW-160, Suite F</p>
                      <p className="text-gray-600 dark:text-gray-300">Pahrump, NV 89048</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#0038A8] dark:text-white" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8v4l3 3" />
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      <p className="font-semibold text-gray-900 dark:text-white">Hours</p>
                      <p className="text-gray-600 dark:text-gray-300">Mon-Sun: 8:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#0038A8] px-5 py-3 font-bold text-white shadow-sm hover:bg-[#002d8a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0038A8]"
                    aria-label="Open Google Maps directions to 3190 HW-160 Suite F Pahrump NV"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
