
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
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
    <section id="services" className="py-16 md:py-24 bg-gray-50">
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
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
      </div>
    </section>
  );
};

export default ServicesSection;
