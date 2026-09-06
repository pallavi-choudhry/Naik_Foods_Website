import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-green-950 pt-16 pb-6"> 
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand (Left) */}
          <div className="space-y-4">
            <img 
              src="/logo.png" 
              alt="Naik Foods" 
              className="w-40 h-auto object-contain"
            />
            
            <p className="text-green-950 text-base leading-relaxed pt-2">
              Authentic flavors from Vidarbha & Konkan, delivered with love.
            </p>

            {/* Social Icons (White background, Green text) */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#FF6B35] shadow-lg hover:scale-110 transition-transform duration-300">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1877F2] shadow-lg hover:scale-110 transition-transform duration-300">
                <FaFacebookF size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Shop Links (Text should be Dark Green/Black to be visible) */}
          <div>
            <h4 className="text-green-950 font-bold text-lg uppercase tracking-wider mb-6 relative inline-block">
              Shop
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-950/40 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {['Snacks and Namkeen', 'Pickles & Condiments', 'Sweets & Bakery', 'Dairy & Beverages', 'Mukhvas & Digestives'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-green-900 hover:text-black hover:underline transition-colors text-[15px] font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (Text should be Dark Green/Black) */}
          <div>
            <h4 className="text-green-950 font-bold text-lg uppercase tracking-wider mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-950/40 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Blog', 'Store', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-green-900 hover:text-black hover:underline transition-colors text-[15px] font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Our Store (Right Box - Dark Green semi-transparent, White text) */}
          <div>
            <div className="bg-green-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg"> {/* Dark green box */}
              <h4 className="text-white font-bold text-xl mb-6">
                Visit Our Store
              </h4>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0" size={18} />
                  <p className="text-white text-sm leading-relaxed">
                    Seva Mitra Mandal Chowk<br />
                    Near Fadgate Police Chowki<br />
                    Shukrawar Peth, Pune 411002
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-white flex-shrink-0" size={16} />
                  <a href="tel:+919730046247" className="text-white font-semibold text-sm hover:underline">
                    +91 9730046247
                  </a>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-3">
                  <FaClock className="text-white flex-shrink-0" size={16} />
                  <p className="text-white font-semibold text-sm">
                    9 AM - 10 PM Daily
                  </p>
                </div>
              </div>

              {/* Get Directions Button (White background, Green text) */}
              <button className="w-full bg-white text-green-800 font-bold py-3 mt-6 rounded-xl hover:bg-[#F0F0F0] transition-colors">
                GET DIRECTIONS
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Text Dark Green) */}
        <div className="border-t border-green-900/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-green-950">
            © 2026 Naik Foods • Design & Developed by Bits and Volts
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-green-900 hover:text-black hover:underline transition-colors">Terms & Conditions</a>
            <a href="#" className="text-green-900 hover:text-black hover:underline transition-colors">Privacy Policy</a>
          </div>

          {/* Payment Badges (Text Dark Green) */}
          <div className="flex items-center gap-3 text-green-950">
            <span>VISA</span>
            <span className="w-1 h-1 bg-green-950/50 rounded-full"></span>
            <span>RAZORPAY SECURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;