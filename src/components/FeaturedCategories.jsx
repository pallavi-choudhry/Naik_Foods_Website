import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const categories = [
  {
    title: 'Snacks and Namkeen',
    items: '105 Items',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Pickles & Condiments',
    items: '14 Items',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Sweets & Bakery',
    items: '25 Items',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Dairy & Beverages',
    items: '15 Items',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Mukhvas & Digestives',
    items: '6 Items',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop'
  }
];

// Duplicate array for seamless loop
const marqueeCategories = [...categories, ...categories];

const FeaturedCategories = () => {
  return (
    <section className="bg-[#FDF8F4] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Featured Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our curated selection of regional Maharashtrian delights.
            </p>
          </div>

          {/* Optional Arrows */}
          <div className="hidden sm:flex gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md transition-all">
              <FaChevronRight className="rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md transition-all">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Marquee Scroll Container */}
        <div className="relative w-full overflow-hidden">
          {/* Moving Track (No gradients) */}
          <div className="flex gap-6 animate-marquee">
            {marqueeCategories.map((category, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
              >
                {/* Image Container - Full Cover */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 text-left bg-white">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#82ae46] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {category.items}
                  </p>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCategories;