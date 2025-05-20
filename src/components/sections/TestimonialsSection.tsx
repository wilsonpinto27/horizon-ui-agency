
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Working with PixelCraft Studio transformed our online presence. Their team not only delivered a stunning website but also improved our user experience dramatically, resulting in a 40% increase in conversions.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechFlow Inc.",
    },
    {
      id: 2,
      content: "The automation solution developed by PixelCraft has saved us countless hours of manual work. Their understanding of our business needs and technical expertise is unmatched. Highly recommended!",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "Global Logistics",
    },
    {
      id: 3,
      content: "From concept to launch, the PixelCraft team was professional, creative, and technically skilled. They delivered our mobile app ahead of schedule, and the user feedback has been overwhelmingly positive.",
      author: "Rebecca Torres",
      position: "Product Owner",
      company: "HealthMate",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read about the experiences of businesses we've worked with and the impact of our solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-0 shadow-md">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 text-4xl text-blue-400">"</div>
                  <p className="text-gray-700 mb-6 italic">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
