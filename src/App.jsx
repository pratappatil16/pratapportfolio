import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Page transition variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: 'easeInOut'
    } 
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3,
      ease: 'easeInOut'
    } 
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Handle mouse move for custom cursor
  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Cursor variants
  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
      borderColor: 'rgba(168, 85, 247, 0.7)',
      scale: 1,
    },
    hover: {
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      backgroundColor: 'rgba(168, 85, 247, 0.4)',
      borderColor: 'rgba(168, 85, 247, 1)',
      scale: 1.2,
    },
    click: {
      x: cursorPosition.x - 15,
      y: cursorPosition.y - 15,
      backgroundColor: 'rgba(232, 121, 249, 0.6)',
      borderColor: 'rgba(232, 121, 249, 1)',
      scale: 0.9,
    },
  };

  // Handle cursor interaction
  const handleMouseEnter = () => setCursorVariant('hover');
  const handleMouseLeave = () => setCursorVariant('default');
  const handleMouseDown = () => setCursorVariant('click');
  const handleMouseUp = () => setCursorVariant('hover');

  // Add event listeners for cursor interaction
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mouseup', handleMouseUp);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseup', handleMouseUp);
      });
    };
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-40 h-40 border-4 border-gray-800 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-spin" style={{ animationDuration: '1s' }}></div>
            <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-gradient">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      {/* Custom Cursor - Only on desktop */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key="home"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <Hero />
            <About />
            <Experience />
            <Achievements />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#1F2937',
            color: '#fff',
            border: '1px solid #4B5563',
            borderRadius: '0.5rem',
            padding: '12px 20px',
          },
          success: {
            iconTheme: {
              primary: '#A855F7',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white border border-gray-700 hover:border-primary/50 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export default App;
