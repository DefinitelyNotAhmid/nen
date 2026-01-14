'use client';

import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#070a10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal from="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
                Meet Marci Metzger
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                Realtor with Over 30 Years of Experience
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal from="up">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/rs=w_1095,h_1095,cg_true.webp"
                  alt="Marci Metzger - Professional Realtor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal from="up" delayMs={120}>
              <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-200">
                Marci Metzger is a seasoned REALTOR® with <strong className="numeric">over 30 years of experience</strong> helping buyers and sellers navigate the real estate market with confidence. Beginning her career in Washington State and now serving Pahrump, Nevada, Marci brings a depth of knowledge shaped by years of hands-on work across changing markets and client needs.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-200">
                She specializes in both <strong>residential and commercial real estate</strong>, providing thoughtful guidance to first-time buyers, long-time homeowners, and investors alike. Marci is known for her straightforward communication, attention to detail, and commitment to ensuring every client feels informed and supported throughout the process.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-200">
                With a strong understanding of the local Pahrump market, Marci helps clients evaluate opportunities clearly, negotiate effectively, and move forward with clarity. Her approach is rooted in professionalism, transparency, and building long-term relationships based on trust.
              </p>

              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white p-6 shadow-sm dark:border-white/10 dark:from-white/5 dark:via-white/0 dark:to-white/5">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0038A8] to-[#CE1126]" />

                <div className="relative pl-4">
                  <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    Top Residential Sales Last 5 Years
                  </p>
                  <p className="mt-2 text-gray-700 leading-relaxed dark:text-gray-200">
                    We helped nearly <strong className="numeric">90 clients in 2021</strong>, and closed{' '}
                    <strong className="numeric">$28.5 million in sales</strong>. Our clients deserve our best, and we want to make sure our best is better every year.
                  </p>
                </div>
              </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
