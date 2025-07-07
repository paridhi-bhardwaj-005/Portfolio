import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Server, Brain } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import myphoto from '../assets/myphoto.jpeg';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typingText = useTypingAnimation([
    'DevOps Engineer',
    'AI/ML Enthusiast',
    'Cloud Builder',
    'Full Stack Developer'
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#1a0036] to-[#3a2067] flex items-center justify-center relative overflow-hidden pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Fewer, slower, and darker floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#a084e8] rounded-full opacity-20"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        {/* Softer, purple orb */}
        <motion.div
          className="absolute w-64 h-64 bg-[#a084e8] rounded-full opacity-10 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl text-[#875ef4] font-mono mb-4">
              Hello, I'm
            </h2>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono"
              animate={{ 
                textShadow: [
                  '0 0 10px #875ef4',
                  '0 0 20px #875ef4',
                  '0 0 10px #875ef4'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Paridhi Bhardwaj
            </motion.h1>
            <div className="text-2xl md:text-3xl text-gray-300 font-mono h-12 flex items-center justify-center md:justify-start">
              <span className="mr-2">I'm a</span>
              <span className="text-[#875ef4] border-r-2 border-[#875ef4] pr-2 animate-pulse">
                {typingText}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl font-mono leading-relaxed"
          >
            Passionate about building scalable cloud infrastructure, implementing DevOps best practices, 
            and exploring the frontiers of AI/ML technologies. I turn complex problems into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px #875ef4' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#875ef4] text-white rounded-lg font-semibold hover:bg-[#6b46c1] transition-colors font-mono"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#875ef4] text-[#875ef4] rounded-lg font-semibold hover:bg-[#875ef4] hover:text-white transition-colors font-mono"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <img
            src={myphoto}
            alt="My Photo"
            className="w-80 h-80 object-cover shadow-2xl border-4 border-[#a084e8] bg-[#2a1457]"
            style={{ boxShadow: '0 8px 40px 0 rgba(160, 132, 232, 0.25)' }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm font-mono mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;