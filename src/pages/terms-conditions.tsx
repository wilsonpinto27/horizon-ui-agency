import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900"
    >
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-8 text-white">Terms and Conditions</h1>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-gray-300">Last Updated: May 20, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and PearFox Studio ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p className="text-gray-300">
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Services</h2>
              <p className="text-gray-300">
                PearFox Studio provides web design, development, and related digital services to clients. The specific details, deliverables, timelines, and payment terms for services will be outlined in separate agreements or statements of work for each client project.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Intellectual Property Rights</h2>
              <p className="text-gray-300">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p className="text-gray-300">
                For client projects, ownership of deliverables will be specified in individual client agreements. Generally, upon full payment, clients receive ownership of the final deliverables, while we retain ownership of preliminary designs and proprietary code libraries.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. User Representations</h2>
              <p className="text-gray-300">
                By using the Site, you represent and warrant that: (1) you have the legal capacity to agree to these Terms and Conditions; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Prohibited Activities</h2>
              <p className="text-gray-300">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Limitation of Liability</h2>
              <p className="text-gray-300">
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Indemnification</h2>
              <p className="text-gray-300">
                You agree to defend, indemnify, and hold harmless PearFox Studio and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses, resulting from or arising out of: (1) your use and access of the Site; or (2) your violation of these Terms and Conditions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. Term and Termination</h2>
              <p className="text-gray-300">
                These Terms and Conditions shall remain in full force and effect while you use the Site. We may terminate your use or participation in the Site or delete any content or information that you posted at any time, without warning, in our sole discretion.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">9. Governing Law</h2>
              <p className="text-gray-300">
                These Terms and Conditions shall be governed by and defined following the laws of [Your Country]. PearFox Studio and yourself irrevocably consent that the courts of [Your Country] shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">10. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-gray-300">
                Email: legal@pearfox.studio<br />
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

export default TermsConditions;
