import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="relative w-40 h-40 mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full animate-pulse-slow" />
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full rounded-full object-cover relative z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 font-space">{member.name}</h3>
        <p className="text-purple-400 font-medium mb-3 tracking-wide">{member.role}</p>
        <p className="text-gray-300 mb-6 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</p>
        <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {Object.entries(member.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 transition-transform duration-300"
            >
              {platform === 'github' && <FaGithub size={20} />}
              {platform === 'linkedin' && <FaLinkedin size={20} />}
              {platform === 'instagram' && <FaInstagram size={20} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default TeamMemberCard;

