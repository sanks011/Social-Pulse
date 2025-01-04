import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ number, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
  >
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{number}</h3>
    <p className="text-gray-300 text-lg">{label}</p>
  </motion.div>
);

export default StatCard;

