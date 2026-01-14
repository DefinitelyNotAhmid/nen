'use client';

import Reveal from './Reveal';

export default function Services() {
  const services = [
    {
      image: '/cr=w_1095,h_1095.webp',
      imageVariant: 'square',
      title: 'Real Estate Done Right',
      description:
        "Nervous about your property adventure? Don’t be. Whether you’re getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
    },
    {
      image: '/cr=w_1095,h_1095%20(1).webp',
      imageVariant: 'square',
      title: 'Commercial & Residential',
      description:
        "Large or small, condo or mansion, we can find it and get it at the price that’s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars."
    },
    {
      image: '/cr=w_730,h_730.webp',
      imageVariant: 'circle',
      title: 'Rely on Expertise',
      description:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-[#0b1324]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal from="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
                Our Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                Real Estate Done Right — Commercial & Residential
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={index} from="up" delayMs={index * 90}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group dark:bg-white/5 dark:border dark:border-white/10 dark:shadow-black/30">
                  <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-40 h-40 rounded-full object-cover mx-auto"
                      loading="lazy"
                    />
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-4 text-center dark:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-700 leading-relaxed text-center dark:text-gray-200">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal from="up" delayMs={150}>
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-[#0038A8] dark:bg-white/5 dark:border-white/10 dark:shadow-black/30">
              <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-200">
                <strong>Nervous about your property adventure?</strong> Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible. We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
