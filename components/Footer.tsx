export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Marci Metzger</h3>
              <p className="text-gray-400 mb-4">
                The Ridge Realty Group
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nearly 30 years of trusted real estate expertise serving Pahrump, Las Vegas, Henderson, and surrounding Nevada communities. Your partner in finding the perfect property.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#properties" className="text-gray-400 hover:text-white transition-colors">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="tel:+12069196886" className="hover:text-white transition-colors">
                    (206) 919-6886
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/MarciHomes/"
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                        <path d="M13.5 22v-8.2h2.76l.41-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.7V4.14c-.3-.04-1.33-.14-2.52-.14-2.5 0-4.2 1.52-4.2 4.32v2.28H7.5v3.2h2.58V22h3.42z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/marciandlauren_nvrealtors/"
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                        <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2z" />
                        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                        <path d="M17.5 6.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/marci-metzger-30642496/"
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                        <path d="M20.45 20.45h-3.55v-5.55c0-1.32-.03-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.93v5.64H9.38V9h3.41v1.56h.05c.47-.89 1.62-1.84 3.34-1.84 3.57 0 4.23 2.35 4.23 5.4v6.33z" />
                        <path d="M5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12z" />
                        <path d="M7.12 20.45H3.56V9h3.56v11.45z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Yelp"
                      title="Yelp"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                        <path d="M12.05 2c-.62 0-1.16.45-1.23 1.07l-.63 6.04c-.07.7.52 1.31 1.23 1.31h1.26c.7 0 1.3-.61 1.23-1.31l-.63-6.04C13.21 2.45 12.67 2 12.05 2z" />
                        <path d="M7.43 10.38 3.2 8.14a1.18 1.18 0 0 0-1.6.52 1.23 1.23 0 0 0 .25 1.46l3.5 3.6c.46.47 1.23.47 1.69 0l.9-.9c.46-.46.46-1.23 0-1.69-.16-.16-.32-.31-.51-.45z" />
                        <path d="M16.67 10.38c-.19.14-.35.29-.51.45-.46.46-.46 1.23 0 1.69l.9.9c.46.47 1.23.47 1.69 0l3.5-3.6a1.23 1.23 0 0 0 .25-1.46 1.18 1.18 0 0 0-1.6-.52l-4.23 2.24z" />
                        <path d="M9.63 16.67l-2.24 4.23a1.18 1.18 0 0 0 .52 1.6 1.23 1.23 0 0 0 1.46-.25l3.6-3.5c.47-.46.47-1.23 0-1.69l-.9-.9c-.46-.46-1.23-.46-1.69 0-.16.16-.31.32-.45.51z" />
                        <path d="M14.47 16.16c-.46.46-.46 1.23 0 1.69l3.6 3.5c.42.41 1.08.48 1.56.2.56-.32.76-1.05.44-1.62l-2.24-4.23c-.14-.19-.29-.35-.45-.51-.46-.46-1.23-.46-1.69 0l-.9.97z" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="pt-2">
                  3190 HW-160, Suite F<br />
                  Pahrump, NV 89048
                </li>
                <li className="pt-2">
                  Mon-Sun: 8:00 AM - 7:00 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 dark:border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Marci Metzger - The Ridge Realty Group. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
