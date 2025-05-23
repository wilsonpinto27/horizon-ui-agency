
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight your users and achieve business goals.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      features: ['Responsive Design', 'Front-end Development', 'Back-end Development', 'E-commerce'],
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      features: ['iOS Apps', 'Android Apps', 'Cross-platform Solutions', 'App Store Optimization'],
    },
    {
      id: 4,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with custom automation tools and workflows.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      features: ['Workflow Automation', 'Integration Services', 'Custom Scripts', 'Process Optimization'],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Mobile layout - each service in its own card */}
        <div className="lg:hidden space-y-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="mr-2 text-blue-600">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop layout - split screen with fixed image and scrollable content */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Fixed image that changes */}
          <div className="relative h-[600px] lg:sticky top-24 self-start">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="absolute inset-0"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [index / services.length, (index + 0.8) / services.length],
                      [0, 1]
                    ),
                    zIndex: services.length - index
                  }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl"
                    style={{
                      transform: 'perspective(1000px) rotateY(5deg)',
                      boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.3), 0 18px 36px -18px rgba(0, 0, 0, 0.33)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-xl font-bold font-display">{service.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Scrollable content */}
          <div className="space-y-12 lg:space-y-24 lg:pl-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg p-8 transition-transform hover:scale-[1.02]"
              >
                <h3 className="text-2xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="mr-2 text-blue-600">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
