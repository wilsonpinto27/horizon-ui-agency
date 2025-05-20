
import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
  // Mock client logos - in a real project these would be actual logo images
  const clients = [
    { id: 1, name: 'Canon', logo: 'Canon' },
    { id: 2, name: 'AirTable', logo: 'AirTable' },
    { id: 3, name: 'Slack', logo: 'Slack' },
    { id: 4, name: 'Adobe', logo: 'Adobe' },
    { id: 5, name: 'Microsoft', logo: 'Microsoft' },
    { id: 6, name: 'Google', logo: 'Google' },
    { id: 7, name: 'Shopify', logo: 'Shopify' },
    { id: 8, name: 'Atlassian', logo: 'Atlassian' },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-2">Trusted by innovative teams worldwide</h2>
        </motion.div>
        
        {/* Client logo marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {clients.map((client) => (
              <div key={client.id} className="flex flex-shrink-0 items-center justify-center h-12 md:h-16 w-24 md:w-32 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="font-bold text-gray-500 text-xl md:text-2xl">{client.logo}</div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client) => (
              <div key={`${client.id}-duplicate`} className="flex flex-shrink-0 items-center justify-center h-12 md:h-16 w-24 md:w-32 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="font-bold text-gray-500 text-xl md:text-2xl">{client.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
