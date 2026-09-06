import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaTrophy, FaUsers } from 'react-icons/fa';

const HeroSection = () => {
  return (
    // Premium Dark Gradient Background (Orange to Deep Maroon)
    <section className="min-h-[90vh] relative bg-gradient-to-br from-[#FF6B35] via-[#D9481C] to-[#5C1600] overflow-hidden">
      
      {/* Subtle Pattern / Floating Orbs for Attractive Look (Optional) */}
      <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] w-72 h-72 bg-[#FFB347]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Background Image (Commented kiya hai, agar chahiye toh uncomment karein) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920')`,
        }}
      />
      
      {/* Dark Gradient Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      <div className="relative container-custom min-h-[90vh] flex items-center justify-center">
        <motion.div 
          className="text-center max-w-4xl mx-auto py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
         
          {/* Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The Heart of{' '}
            <span className="text-[#FFD700] relative"> {/* Gold color for highlight */}
              Authentic
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-[#FF6B35]/40 rounded-full blur-sm" />
            </span>{' '}
            Maharashtra
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-white/95 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            From hand-pounded masalas to farm-fresh staples, bring the traditional 
            flavors of Vidarbha to your kitchen.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-14"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              className="bg-white text-[#D9481C] px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:bg-[#FFD700] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop the Collection →
            </motion.button>
            
          </motion.div>

        
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;