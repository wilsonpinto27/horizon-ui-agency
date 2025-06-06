import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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
    <section id="projects" className="py-16 md:py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">Our Recent Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                    <Card className="h-full overflow-hidden transition-all hover:shadow-xl group bg-gray-700 border-gray-600">
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
                      <CardHeader className="relative z-10 bg-gray-700">
                        <div className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-2">
                          {project.category}
                        </div>
                        <CardTitle className="group-hover:text-blue-400 transition-colors text-white">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2 text-gray-300">{project.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="bg-gray-700 pt-0 pb-4">
                        <Button 
                          variant="ghost" 
                          className="p-0 h-auto text-blue-400 hover:text-blue-300 hover:bg-transparent group"
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
              <CarouselPrevious className="-left-4 bg-gray-700 border-gray-600 text-white hover:bg-gray-600" />
              <CarouselNext className="-right-4 bg-gray-700 border-gray-600 text-white hover:bg-gray-600" />
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
              <Card className="h-full overflow-hidden transition-all hover:shadow-xl group bg-gray-700 border-gray-600">
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
                <CardHeader className="relative z-10 bg-gray-700">
                  <div className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="group-hover:text-blue-400 transition-colors text-white">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="bg-gray-700 pt-0 pb-4">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-blue-400 hover:text-blue-300 hover:bg-transparent group"
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
          <Button variant="outline" className="rounded-md group bg-gray-700 border-gray-600 text-white hover:bg-gray-800 hover:text-gray-200">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Enhanced Project Details Dialog */}
      {selectedProject && (
        <Dialog open={selectedProject !== null} onOpenChange={closeProjectDetails}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-gray-800 border-gray-600">
            {/* Hero Banner */}
            <div className="relative w-full h-64 bg-gradient-to-r from-blue-600/90 to-purple-600/90 overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8">
                  <Badge className="mb-3 bg-blue-700 hover:bg-blue-800 text-white">
                    {selectedProject.category}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-2">
                    {selectedProject.title}
                  </h1>
                  <p className="text-white/80 max-w-2xl">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content - 2/3 width on desktop */}
                <div className="md:col-span-2 space-y-8">
                  {/* Overview Section */}
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-4 text-white">Project Overview</h2>
                    <p className="text-gray-300">{selectedProject.fullDescription}</p>
                  </div>
                  
                  {/* Challenge Section */}
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-4 text-white">The Challenge</h2>
                    <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r">
                      <p className="text-gray-300">{selectedProject.challenge}</p>
                    </div>
                  </div>
                  
                  {/* Solution Section */}
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-4 text-white">Our Solution</h2>
                    <p className="text-gray-300">{selectedProject.solution}</p>
                  </div>
                </div>
                
                {/* Sidebar - 1/3 width on desktop */}
                <div className="space-y-8">
                  {/* Results Section */}
                  <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-700">
                    <h2 className="text-xl font-bold font-display mb-4 text-white">Key Results</h2>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Project Details */}
                  <div className="border border-gray-600 rounded-lg p-6 bg-gray-700">
                    <h2 className="text-xl font-bold font-display mb-4 text-white">Project Details</h2>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-400 block">Category</span>
                        <span className="font-medium text-white">{selectedProject.category}</span>
                      </div>
                      <Separator className="bg-gray-600" />
                      <div>
                        <span className="text-sm text-gray-400 block">Timeline</span>
                        <span className="font-medium text-white">8 weeks</span>
                      </div>
                      <Separator className="bg-gray-600" />
                      <div>
                        <span className="text-sm text-gray-400 block">Technologies</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline" className="border-gray-600 text-gray-300">React</Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">Tailwind</Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">Node.js</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="mt-12 border-t border-gray-600 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Interested in a similar solution?</h3>
                  <p className="text-gray-300">Let's discuss how we can help with your project</p>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={closeProjectDetails} className="border-gray-600 text-white hover:bg-gray-700">
                    Close
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default ProjectsSection;
