import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <FaCode />, items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'JavaScript', 'TypeScript'] },
    { name: 'Backend', icon: <FaServer />, items: ['Node.js', 'Express'] },
    { name: 'Mobile', icon: <FaMobile />, items: ['React Native'] },
    { name: 'Database', icon: <FaDatabase />, items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - About Text */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Get to <span className="text-gradient">Know Me!</span>
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                With over 5 years of experience in the industry, I've had the privilege of working with amazing teams 
                to build scalable and user-friendly applications.
              </p>
              <p>
                My journey in web development started when I was in college, and I've been in love with coding ever since. 
                I'm always eager to learn new technologies and stay up-to-date with the latest trends in the industry.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community through blog posts and tutorials.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-primary text-xl mr-4">
                  <span>🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-gray-400">B.Tech in Computer Science</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-primary text-xl mr-4">
                  <span>💼</span>
                </div>
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-gray-400">1+ Years</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-primary text-xl mr-4">
                  <span>📱</span>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-sm text-gray-400">+91 7030687357</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-primary text-xl mr-4">
                  <span>✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-gray-400">ppratappatil775@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 shadow-xl"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                My <span className="text-gradient">Skills</span>
              </h3>
              
              <div className="space-y-8">
                {skills.map((category, index) => (
                  <motion.div 
                    key={category.name}
                    className="mb-6"
                    variants={item}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mr-3">
                        {category.icon}
                      </div>
                      <h4 className="text-xl font-semibold">{category.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-gray-300 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:text-white transition-all duration-300 border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
