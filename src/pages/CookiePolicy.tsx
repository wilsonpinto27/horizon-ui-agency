
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last Updated: May 20, 2025</p>
              
              <p>
                This Cookie Policy explains how PixelCraft Studio uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, PixelCraft Studio) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Why Do We Use Cookies</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
              <p>
                The specific types of first and third-party cookies served through our website and the purposes they perform include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  <strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
                </li>
                <li>
                  <strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
                </li>
                <li>
                  <strong>Marketing cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. How Can You Control Cookies</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
              </p>
              <p>
                You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
              </p>
              <p>
                Email: privacy@pixelcraft.studio<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Innovation Drive, San Francisco, CA 94103
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default CookiePolicy;
