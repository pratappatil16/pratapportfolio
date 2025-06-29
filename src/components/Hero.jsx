import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import avatar from '../assets/IMG_2673.svg';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/ppratappatil16', label: 'LeetCode' },
  ];

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#a855f7]/20 to-[#e879f9]/20 filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#e879f9]/20 to-[#a855f7]/20 filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 rounded-full bg-gradient-to-r from-[#a855f7]/20 to-[#e879f9]/20 filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Avatar */}
          <motion.div 
            className="relative mb-12 lg:mb-0 lg:mr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#a855f7] to-[#e879f9] p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                  <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full avatar-glow"></div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-[#a855f7] to-[#e879f9] flex items-center justify-center text-white text-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute w-12 h-12 rounded-full bg-gray-900"></span>
              <span className="relative z-10">🚀</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#e879f9] to-[#a855f7] flex items-center justify-center text-white text-xl"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute w-8 h-8 rounded-full bg-gray-900"></span>
              <span className="relative z-10">✨</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi, I'm <span className="text-gradient">Pratap Patil</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-gradient">Frontend Developer</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I build exceptional digital experiences. Currently focused on building The Jupiter App for Jupiter Money.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <a 
                href="#contact" 
                className="btn-primary flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                <span>Get In Touch</span>
              </a>
              <a 
                href="#about" 
                className="flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300"
              >
                <span>Learn More</span>
                <FaArrowDown className="ml-2" />
              </a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-[#a855f7] transition-colors relative group"
                  aria-label={social.label}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#a855f7] to-[#e879f9] transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1"
          >
            <motion.div 
              className="w-1 h-2 bg-gradient-to-b from-[#a855f7] to-[#e879f9] rounded-full"
              animate={{ y: [0, 8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
