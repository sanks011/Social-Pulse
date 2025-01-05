import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
// Import your animation JSON file - adjust the path as needed
import analyticsAnimation from "../assets/heh.json";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={targetRef}>
      <motion.div
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-full text-sm font-semibold"
            >
              Powered by OpenAI
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
            >
              Every Insight of Your Social Media Analytics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-xl text-gray-300"
            >
              Unlock powerful insights with AI-driven analytics to boost your social media engagement 
              and grow your audience organically.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col md:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-medium shadow-lg hover:from-purple-600 hover:to-blue-600"
              >
                <Link to="AnalyzerForm">Get Started →</Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://youtu.be/bJ1DC0qwtiQ?si=YgSCfOhQcpAXyz-W"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white py-3 px-8 rounded-lg text-lg font-medium shadow-lg hover:bg-gray-800/70"
              >
                View Demo
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Section - Clean Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
              {/* Animation */}
              <Lottie 
                animationData={analyticsAnimation}
                loop={true}
                className="w-full h-full relative z-10"
                style={{ minHeight: "400px" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;