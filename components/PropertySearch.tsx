'use client';

import { useState } from 'react';

export default function PropertySearch() {
  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="search" className="py-20 bg-gradient-to-br from-[#0038A8] to-[#002d8a] dark:from-[#0b1324] dark:to-[#070a10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Dream Home
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              Search our comprehensive listings database
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6 sm:p-8 dark:bg-white/5 dark:border dark:border-white/10 dark:shadow-black/30">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Pahrump, Las Vegas"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0038A8] focus:border-transparent transition-all dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400"
                  aria-label="Enter property location"
                />
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="property-search-select w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0038A8] focus:border-transparent transition-all dark:border-white/10 dark:bg-[#0b1220] dark:text-white"
                  aria-label="Select property type"
                >
                  <option value="">All Types</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                  <option value="investment">Investment</option>
                </select>
              </div>

              <div>
                <label htmlFor="minPrice" className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                  Min Price
                </label>
                <input
                  type="text"
                  id="minPrice"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleChange}
                  placeholder="$0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0038A8] focus:border-transparent transition-all dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400"
                  aria-label="Enter minimum price"
                />
              </div>

              <div>
                <label htmlFor="maxPrice" className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                  Max Price
                </label>
                <input
                  type="text"
                  id="maxPrice"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  placeholder="Any"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0038A8] focus:border-transparent transition-all dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400"
                  aria-label="Enter maximum price"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-8 py-4 bg-[#CE1126] text-white font-bold text-lg rounded-lg hover:bg-[#b00f20] transition-colors shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CE1126]"
            >
              Find Your Home
            </button>
          </form>

          <p className="text-center text-white/80 mt-6 text-sm">
            Can't find what you're looking for? <a href="#contact" className="underline hover:text-white font-semibold">Contact us</a> for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
