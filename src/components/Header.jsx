import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Floating header container */}
      <div className={`mx-4 mt-4 transition-all duration-500 ease-in-out
        ${scrolled ? 'mt-2' : 'mt-4'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Glass container */}
          <div className={`relative overflow-hidden transition-all duration-500
            ${scrolled ? 'bg-black/10 backdrop-blur-sm' : 'bg-white/5 backdrop-blur-xs'}
            border border-white/10 rounded-2xl`}>
            
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 animate-gradient" />
            
            {/* Main content */}
            <div className="relative px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo group */}
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative group">
                    {/* Logo glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-50 blur-md transition-all duration-500" />
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                      <img
                        src="/src/assets/crazy.gif"
                        alt="Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h1 className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-white via-white to-white/70 text-transparent bg-clip-text">
                      Social Pulse
                    </span>
                  </h1>
                </motion.div>

                {/* Navigation */}
                <nav className="flex items-center gap-8">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="../App">About Us</NavLink>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to="/AnalyzerForm">
                      <div className="relative group">
                        {/* Button glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-50 group-hover:opacity-70 blur transition-all duration-300 rounded-xl" />
                        <div className="relative px-6 py-2 bg-black/50 rounded-xl border border-white/10 backdrop-blur-xs">
                          <span className="relative bg-gradient-to-r from-purple-100 to-blue-100 text-transparent bg-clip-text font-medium">
                            Analyse
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Enhanced NavLink component
const NavLink = ({ to, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Link 
        to={to}
        className="relative text-white/80 hover:text-white transition-colors duration-300"
      >
        {children}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-purple-400 to-blue-400"
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
};

export default Header;
