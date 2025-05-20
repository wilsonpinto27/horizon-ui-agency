
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      description: "Complete UX overhaul and development for a leading fashion retailer, resulting in 45% increased conversions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "UI/UX Design",
      fullDescription: "Our client, a well-established fashion retailer, was struggling with an outdated e-commerce platform that had high bounce rates and low conversion. We conducted extensive user research, created detailed user personas, and redesigned the entire customer journey. The new interface featured intuitive navigation, simplified checkout process, and personalized product recommendations powered by AI.",
      challenge: "The main challenge was to modernize the platform while maintaining brand recognition and ensuring a smooth transition for existing customers.",
      solution: "We implemented a phased launch strategy with A/B testing at each stage to ensure optimal performance. The platform was rebuilt using React for the frontend and a headless CMS for content management, allowing for rapid iterations and improvements.",
      results: ["45% increase in conversion rate", "32% decrease in cart abandonment", "60% increase in mobile purchases", "Average session duration increased by 2.5 minutes"]
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      description: "Custom financial management dashboard with real-time data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Web Development",
      fullDescription: "We designed and developed a comprehensive financial dashboard for a fintech startup that needed to present complex data in an accessible format for their customers. The solution included customizable widgets, real-time transaction monitoring, and automated reporting features.",
      challenge: "Presenting complex financial data in an intuitive way while ensuring bank-grade security and compliance with financial regulations.",
      solution: "We developed a modular dashboard using React and D3.js for data visualization, with end-to-end encryption and role-based access controls. The system was designed to handle large volumes of data while maintaining performance.",
      results: ["89% positive feedback from user testing", "Reduced customer support inquiries by 40%", "Successfully passed all security audits", "Selected as a finalist for Financial Software of the Year"]
    },
    {
      id: 3,
      title: "Health & Fitness App",
      description: "Cross-platform mobile application with personalized workout plans, nutrition tracking, and social features.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Mobile App",
      fullDescription: "We created a comprehensive health and fitness application that offers personalized workout routines, meal planning, progress tracking, and community features. The app uses machine learning algorithms to adapt recommendations based on user progress and preferences.",
      challenge: "Creating an engaging experience that would motivate users to maintain their fitness routines and nutritional goals long-term.",
      solution: "We implemented gamification elements, social features for accountability, and a sophisticated recommendation system. The app was developed using React Native for cross-platform compatibility with native modules for performance-intensive features.",
      results: ["Over 100,000 downloads in the first month", "Average user retention of 68% after 3 months", "Featured in the App Store's 'Apps We Love' section", "4.8/5 average rating across platforms"]
    },
    {
      id: 4,
      title: "Smart Home Control System",
      description: "IoT platform connecting and controlling smart home devices with voice and mobile integration.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
      category: "IoT Solution",
      fullDescription: "We developed a centralized smart home system that seamlessly integrates with various IoT devices from different manufacturers. The platform offers voice control, mobile app management, automated routines, and energy usage optimization.",
      challenge: "Creating a unified system that works reliably with diverse hardware from multiple manufacturers while ensuring privacy and security.",
      solution: "We designed a middleware layer that normalizes device communications and implemented end-to-end encryption. The platform uses local processing for privacy-sensitive commands and cloud computing for more complex operations.",
      results: ["Compatible with over 200 device types", "Reduced household energy consumption by an average of 23%", "Adopted by three major smart home manufacturers", "Winner of Smart Home Innovation Award"]
    },
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful client projects that showcase our expertise and capabilities.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="h-full overflow-hidden transition-all hover:shadow-xl group">
                      <div className="h-52 overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-x-0 bottom-0 p-4 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <p className="text-sm font-medium">{project.description}</p>
                        </div>
                      </div>
                      <CardHeader className="relative z-10 bg-white">
                        <div className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                          {project.category}
                        </div>
                        <CardTitle className="group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="bg-white pt-0 pb-4">
                        <Button 
                          variant="ghost" 
                          className="p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent group"
                          onClick={() => openProjectDetails(project)}
                        >
                          View Case Study
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 bg-white" />
              <CarouselNext className="-right-4 bg-white" />
            </div>
          </Carousel>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all hover:shadow-xl group">
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium">{project.description}</p>
                  </div>
                </div>
                <CardHeader className="relative z-10 bg-white">
                  <div className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="bg-white pt-0 pb-4">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent group"
                    onClick={() => openProjectDetails(project)}
                  >
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-md group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Project Details Dialog */}
      {selectedProject && (
        <Dialog open={selectedProject !== null} onOpenChange={closeProjectDetails}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-blue-600">{selectedProject.category}</DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
              />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">Overview</h3>
                  <p className="text-gray-700">{selectedProject.fullDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">Challenge</h3>
                  <p className="text-gray-700">{selectedProject.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">Solution</h3>
                  <p className="text-gray-700">{selectedProject.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-display">Results</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {selectedProject.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button onClick={closeProjectDetails}>Close</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default ProjectsSection;
