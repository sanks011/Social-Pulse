import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group"
  >
    <div className="h-full p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl backdrop-blur-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full p-4 w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white font-space">{title}</h3>
        <p className="text-gray-300 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default FeatureCard;

