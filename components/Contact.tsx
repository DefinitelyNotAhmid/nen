'use client';

import { useState } from 'react';
import Reveal from './Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#070a10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal from="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
                Get In Touch
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                Schedule a Private Consultation Today
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal from="up">
              <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0038A8] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900 dark:text-white">Office Address</p>
                    <p className="text-gray-600 dark:text-gray-300">3190 HW-160, Suite F</p>
                    <p className="text-gray-600 dark:text-gray-300">Pahrump, Nevada 89048</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0038A8] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:+12069196886" className="text-[#0038A8] hover:underline dark:text-white">
                      (206) 919-6886
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0038A8] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                    <a href="https://wa.me/14259412560" className="text-[#0038A8] hover:underline dark:text-white" target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0038A8] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900 dark:text-white">Office Hours</p>
                    <p className="text-gray-600 dark:text-gray-300">Monday - Sunday</p>
                    <p className="text-gray-600 dark:text-gray-300">8:00 AM - 7:00 PM</p>
                    <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
                      Appointments outside office hours available upon request
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg dark:bg-white/5 dark:border dark:border-white/10">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <strong>Marci Metzger - THE RIDGE REALTY GROUP</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2 dark:text-gray-300">
                  Licensed Real Estate Professional serving Pahrump, Las Vegas, Henderson, and surrounding Nevada communities.
                </p>
              </div>
              </div>
            </Reveal>

            <Reveal from="up" delayMs={120}>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0038A8] focus:border-transparent transition-all dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400 dark:border-white/10 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-label="Enter your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0038A8] focus:border-transparent transition-all dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400 dark:border-white/10 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-label="Enter your email address"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0038A8] focus:border-transparent transition-all dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400 dark:border-white/10 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-label="Enter your phone number"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0038A8] focus:border-transparent transition-all resize-none dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400 dark:border-white/10 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-label="Enter your message"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/30 dark:border-green-700/40">
                    <p className="text-green-800 font-semibold dark:text-green-100">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#CE1126] text-white font-bold text-lg rounded-lg hover:bg-[#b00f20] transition-colors shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CE1126] dark:shadow-black/30"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center dark:text-gray-400">
                  By submitting this form, you agree to be contacted by Marci Metzger - The Ridge Realty Group regarding your inquiry.
                </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
