import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#070a10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
              Meet Marci Metzger
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Realtor with Over 30 Years of Experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/rs=w_1095,h_1095,cg_true.webp"
                alt="Marci Metzger - Professional Realtor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

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

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0038A8] dark:bg-white/5 dark:border-white/10">
                <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                  Top Residential Sales Last 5 Years
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  We helped nearly <strong className="numeric">90 clients in 2021</strong>, and closed <strong className="numeric">$28.5 million in sales</strong>. Our clients deserve our best, and we want to make sure our best is better every year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
