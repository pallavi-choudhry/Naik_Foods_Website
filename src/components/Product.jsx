import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

const products = [
    {
        title: 'Beetroot Chips',
        description: 'Beetroot, Crispy, Nutritious Treat',
        price: '₹70',
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=600&auto=format&fit=crop' // Dummy image (aap apni laga sakte hain)
    },
    {
        title: 'Cheeseling',
        description: 'Cheesy, Crispy, Snack Time',
        price: '₹110',
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=600&auto=format&fit=crop'
    },
    {
        title: 'Corn Chakali',
        description: 'Crispy, Golden, Corn Crunch',
        price: '₹50',
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=600&auto=format&fit=crop'
    },
    {
        title: 'Thepla Puri',
        description: 'Authentic, Rustic, Gujarati Flavor',
        price: '₹90',
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=600&auto=format&fit=crop'
    },
    {
        title: 'Jwari Bhel',
        description: 'Authentic, Crispy, Goodness',
        price: '₹30',
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=600&auto=format&fit=crop'
    }
];

const PopularProducts = () => {
    const scrollRef = useRef(null);
    const [favorites, setFavorites] = useState({});

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const toggleFavorite = (index) => {
        setFavorites(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <section className="bg-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                            Popular Products
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Authentic regional specialties curated for you.
                        </p>
                    </div>

                    {/* Arrows */}
                    <div className="hidden sm:flex gap-3">
                        <button
                            onClick={scrollLeft}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#82ae46] hover:text-white transition-all cursor-pointer"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#82ae46] hover:text-white transition-all cursor-pointer"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
                >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Image with Heart */}
                            <div className="relative h-64 bg-[#F4F4F4] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <button
                                    onClick={() => toggleFavorite(index)}
                                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    {favorites[index] ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                                </button>
                            </div>

                            {/* Text & Price */}
                            <div className="p-5 text-left bg-white">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    {product.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-3">
                                    {product.description}
                                </p>
                                <p className="text-xl font-bold text-gray-900 mb-4">
                                    {product.price}
                                </p>

                                {/* Add to Cart Button */}
                                <button className="w-full bg-[#82ae46] hover:bg-[#6d9338] text-white font-semibold py-2.5 rounded-lg transition-all duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for hiding scrollbar */}
            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default PopularProducts;