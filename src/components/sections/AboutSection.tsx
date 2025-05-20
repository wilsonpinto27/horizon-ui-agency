
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Settings } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { id: 1, value: '50+', label: 'Clients Worldwide' },
    { id: 2, value: '120+', label: 'Projects Completed' },
    { id: 3, value: '98%', label: 'Client Satisfaction' },
    { id: 4, value: '6+', label: 'Years Experience' },
  ];

  const features = [
    {
      id: 1,
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Expert Team',
      description: 'Our team consists of experienced designers, developers, and strategists who are passionate about creating exceptional digital experiences.',
    },
    {
      id: 2,
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      title: 'Quality Focused',
      description: 'We uphold the highest standards in every project we undertake, ensuring robust, scalable, and future-proof solutions.',
    },
    {
      id: 3,
      icon: <Settings className="h-10 w-10 text-blue-600" />,
      title: 'Innovative Approach',
      description: 'We combine creativity with technical expertise to deliver solutions that not only meet but exceed our clients' expectations.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">About PixelCraft Studio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of designers and developers passionate about creating exceptional digital experiences that drive business growth.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-bold text-4xl md:text-5xl text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          <motion.div
            className="bg-blue-50 p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
            <p className="text-gray-700">
              To empower businesses with innovative digital solutions that solve complex problems, enhance user experiences, and drive sustainable growth in an increasingly digital world.
            </p>
          </motion.div>

          <motion.div
            className="bg-purple-50 p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-display">Our Vision</h3>
            <p className="text-gray-700">
              To be recognized as the leading agency for creating transformative digital experiences that set new standards in the industry while making technology more accessible and human-centered.
            </p>
          </motion.div>
        </div>

        {/* Features/Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4 p-3 bg-blue-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-display">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
