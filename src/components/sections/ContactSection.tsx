
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Get in touch with us to see how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 font-display">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input id="name" placeholder="John Doe" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                <Input id="company" placeholder="Your Company" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help?" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full rounded-md">
                Send Message
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 font-display">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-700">hello@pixelcraft.studio</p>
                  <p className="text-gray-700">support@pixelcraft.studio</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                  <p className="text-gray-700">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office</h4>
                  <address className="not-italic text-gray-700">
                    123 Innovation Drive<br />
                    San Francisco, CA 94103<br />
                    United States
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-700">Monday - Friday</td>
                    <td className="py-2 font-medium">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-700">Saturday</td>
                    <td className="py-2 font-medium">10:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-gray-700">Sunday</td>
                    <td className="py-2 font-medium">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
