import React from 'react';
import { motion } from 'framer-motion';

const FloatingShape = ({ color, top, left, right, bottom, size }) => {
  const floatAnimation = {
    y: ['0%', '50%', '0%'],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-${color}-500 opacity-10 blur-xl`}
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
      }}
      animate={floatAnimation}
    />
  );
};

export default FloatingShape;

