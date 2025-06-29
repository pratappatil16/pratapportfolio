import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowCircleUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile Development', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'Consulting', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div variants={item} className="mb-6">
              <a href="#" className="text-2xl font-bold text-gradient">
                Pratap Patil
              </a>
            </motion.div>
            <motion.p variants={item} className="text-gray-400 mb-6">
              Creating beautiful, functional, and user-centered digital experiences.
            </motion.p>
            <motion.div variants={item} className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.h3 
                variants={item}
                className="text-lg font-semibold text-white mb-6 relative inline-block"
              >
                {column.title}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              </motion.h3>
              <motion.ul variants={container} className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} variants={item}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-500 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              &copy; {currentYear} Pratap Patil. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex items-center space-x-1 flex-row "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center space-x-1 flex-row hover:text-white text-sm transition-colors duration-300 ">
              <a href="#" >
                Back to Top
              </a>
              <FaArrowCircleUp />
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-8 text-gray-600 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Made with <FaHeart className="inline text-red-500 mx-1" /> by Pratap Patil
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
