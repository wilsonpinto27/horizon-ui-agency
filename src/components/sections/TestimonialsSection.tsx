
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Working with PixelCraft Studio transformed our online presence. Their team not only delivered a stunning website but also improved our user experience dramatically, resulting in a 40% increase in conversions.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      id: 2,
      content: "The automation solution developed by PixelCraft has saved us countless hours of manual work. Their understanding of our business needs and technical expertise is unmatched. Highly recommended!",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "Global Logistics",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      id: 3,
      content: "From concept to launch, the PixelCraft team was professional, creative, and technically skilled. They delivered our mobile app ahead of schedule, and the user feedback has been overwhelmingly positive.",
      author: "Rebecca Torres",
      position: "Product Owner",
      company: "HealthMate",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      id: 4,
      content: "PixelCraft transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their attention to detail and commitment to quality is exceptional.",
      author: "David Wilson",
      position: "CEO",
      company: "Innovate Solutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      id: 5,
      content: "The team at PixelCraft took the time to understand our unique challenges and delivered a custom solution that exceeded our expectations. Their ongoing support has been invaluable to our business.",
      author: "Jennifer Lee",
      position: "Creative Director",
      company: "Artisan Studios",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-amber-50 to-white relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-blue-100 rounded-full -mr-32 -mb-32"></div>
        <div className="absolute left-20 top-40 w-20 h-20 bg-amber-200 rounded-full"></div>
        <div className="absolute right-1/4 top-1/4 w-32 h-32 bg-purple-100 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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

        {/* Testimonials Carousel for Mobile & Tablet */}
        <div className="md:hidden mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-1">
                  <TestimonialCard testimonial={testimonial} renderStars={renderStars} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-1" />
              <CarouselNext className="static transform-none mx-1" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} renderStars={renderStars} />
            </motion.div>
          ))}
        </div>
        
        {/* Featured Testimonial */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 md:p-10 relative">
              <div className="absolute -top-6 -left-6 text-8xl text-blue-200 opacity-50 font-serif">❝</div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-800 mb-6 italic font-light leading-relaxed">
                  "The team at PixelCraft didn't just deliver what we asked for – they anticipated needs we hadn't even recognized yet. The strategic approach they brought to our digital transformation has positioned us as a leader in our industry. Without question, working with them has been one of our best business decisions."
                </p>
                <div className="flex items-center">
                  <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-semibold text-lg">James Donovan</div>
                    <div className="text-gray-600">CTO, Enterprise Solutions</div>
                    <div className="flex mt-1">
                      {renderStars(5)}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, renderStars }) => (
  <Card className="h-full bg-white border-0 shadow-md">
    <CardContent className="p-6 md:p-8">
      <div className="flex mb-4">
        {renderStars(testimonial.rating)}
      </div>
      <p className="text-gray-700 mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
          <AvatarImage src={testimonial.avatar} />
          <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-gray-600">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;
