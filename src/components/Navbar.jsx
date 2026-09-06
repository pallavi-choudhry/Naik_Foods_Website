import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="py-3 sticky top-0 z-50 bg-white shadow-sm"> {/* Background color add kiya */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* 1. Logo - Left side (flex-1 se yeh left space le lega) */}
        <Link to="/" className="no-underline flex-1"> 
          <img 
            src="/logo.png" 
            alt="Naik Foods" 
            className="block mx-0 my-2 w-40 h-auto object-contain"
          />
        </Link>

        {/* 2. Navigation Links - Center (static positioning ke liye) */}
        <ul className="hidden md:flex items-center gap-8">
          <li><Link to="/" className="text-black hover:text-[#FF6B35] text-sm font-medium">Home</Link></li>
          <li><Link to="/about" className="text-black hover:text-[#FF6B35] text-sm font-medium">About</Link></li>
          <li><Link to="/shop" className="text-black hover:text-[#FF6B35] text-sm font-medium">Shop</Link></li>
          <li><Link to="/blogs" className="text-black hover:text-[#FF6B35] text-sm font-medium">Blogs</Link></li>
          <li><Link to="/contact" className="text-black hover:text-[#FF6B35] text-sm font-medium">Contact</Link></li>
        </ul>

        {/* 3. Icons - Right side (flex-1 se yeh right space le lega) */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="relative">
            <FaShoppingCart className="text-black hover:text-[#FF6B35] text-xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-[#FF6B35] text-white text-xs font-bold 
              rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <FaUser className="text-black hover:text-[#FF6B35] text-xl cursor-pointer" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;