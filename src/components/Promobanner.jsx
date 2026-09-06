import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PromoBanner = () => {
  return (
    <section className="bg-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Container - Green Card */}
        <div className="relative bg-[#5cb85c] rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row items-stretch">

          {/* Left Side: Image */}
          <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop"
              alt="Traditional Maharashtrian Snacks"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Green Content */}
          <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">

            {/* Offer Badge */}
            <div className="absolute top-6 right-6 bg-[#FF6B35] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-wider">Offer</span>
              <span className="text-xl font-extrabold leading-none">10%</span>
              <span className="text-[10px] font-bold">OFF</span>
            </div>

            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-white"></span>
              <span className="text-white font-semibold uppercase tracking-widest text-sm">
                Traditional Snacks & Pickles Sale
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Authentic Maharashtrian Flavors
            </h2>

            {/* Description */}
            <p className="text-white/90 text-lg mb-8">
              Crunchy namkeen, tangy pickles, and traditional sweets.
              Authentic taste made in our own kitchen.
            </p>

            {/* Button */}
            <div>
              <button
                className="bg-white text-[#5cb85c] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#F0F0F0] transition-all duration-300 flex items-center gap-2 group"
                onClick={() => window.location.href = '/shop'}
              >
                Shop the Collection
                <span className="group-hover:translate-x-1 transition-transform">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;