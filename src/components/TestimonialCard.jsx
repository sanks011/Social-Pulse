import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ quote, author, company }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
  >
    <FaQuoteLeft className="text-4xl text-purple-400 mb-4" />
    <p className="text-gray-300 text-lg mb-6">{quote}</p>
    <div>
      <p className="text-white font-semibold">{author}</p>
      <p className="text-purple-400">{company}</p>
    </div>
  </motion.div>
);

export default TestimonialCard;

