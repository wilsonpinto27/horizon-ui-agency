
import React from 'react';
import { Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If we're on the homepage, scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to homepage with the hash
      navigate(`/${href}`);
    }
  };

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
              <a href="#" className="text-gray-300 hover:text-white bg-gray-800 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white bg-gray-800 p-2 rounded-full transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>UI/UX Design</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Web Development</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Mobile Apps</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Automation Solutions</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Digital Consulting</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleSectionClick('#about', e)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleSectionClick('#projects', e)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Our Work</span>
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleSectionClick('#testimonials', e)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSectionClick('#contact', e)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors">
                <div className="bg-gray-800 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Mail size={18} className="flex-shrink-0" />
                </div>
                <span className="text-sm">hello@pixelcraft.studio</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors">
                <div className="bg-gray-800 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Phone size={18} className="flex-shrink-0" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300 group hover:text-white transition-colors">
                <div className="bg-gray-800 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                  <MapPin size={18} className="flex-shrink-0" />
                </div>
                <div className="text-sm">
                  123 Innovation Drive<br />
                  San Francisco, CA 94103
                </div>
              </div>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PixelCraft Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
