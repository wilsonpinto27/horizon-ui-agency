
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      description: "Complete UX overhaul and development for a leading fashion retailer, resulting in 45% increased conversions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "UI/UX Design",
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      description: "Custom financial management dashboard with real-time data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Health & Fitness App",
      description: "Cross-platform mobile application with personalized workout plans, nutrition tracking, and social features.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Mobile App",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {project.category}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent">
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-md">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
