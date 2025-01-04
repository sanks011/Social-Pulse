import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-black py-8">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-4">
                Social Pulse
              </h3>
              <p className="text-gray-400">
                Transforming social media analytics with AI-powered insights.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Twitter
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-400">
              © 2025 For Loop De Loop. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;