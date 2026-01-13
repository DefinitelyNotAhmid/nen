'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=200&h=200&q=80',
      name: 'Sarah Mitchell',
      role: 'First-Time Homebuyer',
      content: 'Marci was incredible! She made the stressful process of buying our first home so much easier. Her knowledge and patience were invaluable. We couldn\'t be happier!',
      rating: 5
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
      name: 'Kimmy Doe',
      role: 'Commercial Property Seller',
      content: 'Selling our commercial property was a complex task, but Marci handled everything with utmost professionalism and expertise. She secured a great deal for us. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80',
      name: 'Emily Rodriguez',
      role: 'Residential Buyer',
      content: 'A true professional with a keen eye for detail. Marci made the entire experience smooth and enjoyable. Would definitely work with her again!',
      rating: 5
    }
  ];

  const visibleTestimonials = testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-[#0b1324]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Trusted by families and businesses across Nevada
            </p>
          </div>

          <div className="grid grid-flow-col auto-cols-[320px] sm:auto-cols-[360px] gap-8 overflow-x-auto no-scrollbar" aria-label="Testimonials">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-[#0b1220] dark:border dark:border-white/10 dark:shadow-black/30"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-none">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 dark:text-white truncate">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed dark:text-gray-200">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
