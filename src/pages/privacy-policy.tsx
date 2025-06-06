
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-8 text-white">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-gray-300">Last Updated: May 20, 2025</p>
              
              <p className="text-gray-300">
                At PixelCraft Studio, we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes how we collect, use, and disclose your personal information when you use our services or visit our website.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Information We Collect</h2>
              <p className="text-gray-300">
                We may collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>Personal identifiers such as name, email address, phone number, and mailing address.</li>
                <li>Information you provide when filling out forms on our website, including contact information and project requirements.</li>
                <li>Records of your correspondence with us.</li>
                <li>Details of your visits to our website, including traffic data, location data, logs, and other communication data.</li>
                <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. How We Collect Information</h2>
              <p className="text-gray-300">
                We collect information directly from you when you provide it to us, automatically as you navigate through the site, and from third parties, such as analytics providers.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. How We Use Your Information</h2>
              <p className="text-gray-300">
                We may use information that we collect about you or that you provide to us:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights.</li>
                <li>To notify you about changes to our website or any products or services we offer or provide.</li>
                <li>To improve our website, products, services, marketing, and customer relationships.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Disclosure of Your Information</h2>
              <p className="text-gray-300">
                We may disclose personal information that we collect or you provide:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
                <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of PixelCraft Studio, our customers, or others.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Data Security</h2>
              <p className="text-gray-300">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Your Rights</h2>
              <p className="text-gray-300">
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict use of your personal information. Please contact us if you wish to exercise these rights.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Changes to Our Privacy Policy</h2>
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website or by other means.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. Contact Information</h2>
              <p className="text-gray-300">
                To ask questions or comment about this Privacy Policy and our privacy practices, contact us at:
              </p>
              <p className="text-gray-300">
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

export default PrivacyPolicy;
