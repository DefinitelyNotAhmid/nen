export default function LocationMap() {
  const address = '3190 HW-160, Suite F, Pahrump, NV 89048, United States';
  const directionsUrl =
    'https://www.google.com/maps?daddr=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States';
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="location" className="py-20 bg-white dark:bg-[#070a10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
              Our Location
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              3190 HW-160, Suite F, Pahrump, NV 89048
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-2 rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-white dark:bg-[#0b1220] dark:border-white/10 dark:shadow-black/30">
              <div className="relative w-full aspect-[16/9]">
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

            <div className="rounded-lg border border-gray-200 shadow-lg bg-white p-6 flex flex-col justify-between dark:bg-[#0b1220] dark:border-white/10 dark:shadow-black/30">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">Office Address</h3>
                <p className="text-gray-700 leading-relaxed dark:text-gray-200">
                  3190 HW-160, Suite F
                  <br />
                  Pahrump, NV 89048
                </p>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Hours</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mon-Sun: 8:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#0038A8] px-5 py-3 font-bold text-white hover:bg-[#002d8a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0038A8]"
                  aria-label="Open Google Maps directions to 3190 HW-160 Suite F Pahrump NV"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
