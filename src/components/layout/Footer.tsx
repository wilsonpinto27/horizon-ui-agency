
import React from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-display mb-4">PixelCraft</h3>
            <p className="text-gray-300 mb-4">
              Creating beautiful digital experiences and powerful software solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Automation Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Consulting</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="flex items-center gap-2 text-gray-300 mb-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>hello@pixelcraft.studio</span>
              </p>
              <p className="flex items-center gap-2 text-gray-300 mb-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="text-gray-300 mt-4">
                123 Innovation Drive<br />
                San Francisco, CA 94103
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PixelCraft Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
