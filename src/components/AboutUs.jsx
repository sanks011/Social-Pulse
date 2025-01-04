import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TeamMemberCard from './TeamMember';
import FeatureCard from './FeatureCard';
import { teamMembers } from '../data/teamMembers';
import { features } from '../data/features';
import StatCard from './StatCard';
import TestimonialCard from './TestimonialCard';
import FloatingShape from './FloatingShape';

const AboutUs = () => {
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
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Social Pulse
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Revolutionizing social media analytics with cutting-edge AI technology and real-time insights
          </motion.p>
        </div>
      </motion.div>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <FloatingShape color="purple" top="10%" left="5%" size="100px" />
        <FloatingShape color="blue" top="60%" right="10%" size="80px" />
        <FloatingShape color="pink" bottom="10%" left="15%" size="60px" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Our Mission
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center mt-8 space-y-6"
          >
            <p>
              At Social Pulse, we're dedicated to transforming the landscape of social media analytics. 
              Our mission is to empower businesses and individuals with unparalleled insights, 
              leveraging cutting-edge AI to decode the pulse of online conversations and trends.
            </p>
            <p>
              We believe in the power of data-driven decision making and strive to make complex 
              analytics accessible and actionable for everyone, from small businesses to large enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="10M+" label="Data Points Analyzed Daily" />
            <StatCard number="5000+" label="Active Users" />
            <StatCard number="98%" label="Customer Satisfaction" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Social Pulse has completely transformed our social media strategy. The insights we've gained are invaluable."
              author="Jane Doe"
              company="Tech Innovators Inc."
            />
            <TestimonialCard
              quote="The AI-powered trend detection has given us a competitive edge in our industry. Highly recommended!"
              author="John Smith"
              company="Global Marketing Solutions"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Ready to Elevate Your Social Media Game?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join thousands of businesses that have already revolutionized their social media strategy with Social Pulse. Let's connect and explore how we can transform your online presence.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

