
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-amber-50 to-white py-20 lg:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-blue-100 rounded-full opacity-70 -mr-32 -mb-32"></div>
        <div className="absolute left-20 top-40 w-20 h-20 bg-amber-200 rounded-full opacity-50"></div>
        <div className="absolute right-1/4 top-1/4 w-32 h-32 bg-purple-100 rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Turn Chaos into <span className="text-blue-600">Clarity</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We craft beautiful UI/UX designs, develop robust software, and create automation solutions that transform how businesses operate.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="rounded-md">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="lg" className="rounded-md">
                See Our Work
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-30 blur-xl"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Digital workspace" 
                  className="w-full h-auto rounded-md"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
