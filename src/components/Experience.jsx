import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    type: 'job',
    title: 'Frontend Software Developer',
    company: 'Jupiter',
    duration: '2024 - Present',
    description: 'Implemented convenience fee for mobile prepaid transactions, boosting company revenue.Designed and launched the Bills Auto Pay feature with intuitive UI/UX and seamless recurring payments.Improved biller search and mobile prepaid screens, integrated Amplitude tracking, and added CC Refinance functionality.',
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    type: 'education',
    title: 'B.Tech in Computer Science',
    company: 'Lovely Professional University',
    duration: '2021 - 2025',
    description: 'Focused on software development principles, algorithms, and data structures.',
    icon: <FaGraduationCap />,
  },
  {
    id: 3,
    type:'education',
    title:'12th',
    company:'Army Public School kirkee',
    duration:'2019 - 2020',
    description:'Science Stream',
    icon:<FaGraduationCap/>
  }
];

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gray-900/50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full filter blur-3xl"></div>
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
            <span className="text-gradient">My Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A timeline of my professional journey, including education and work experience.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/50 to-primary/30 -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 lg:pr-0 lg:pl-8' : 'pl-8 lg:pl-0 lg:pr-8'} ${index === 0 ? 'mt-0' : ''} ${index === experiences.length - 1 ? 'mb-0' : ''}`}
              variants={item}
            >
              <div className={`relative ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-lg`}>
                {/* Card */}
                <div className={`p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${index % 2 === 0 ? 'lg:mr-4' : 'lg:ml-4'}`}>
                  <div className="flex items-start">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white ${exp.type === 'job' ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-gradient-to-br from-blue-500 to-cyan-400'}`}>
                      {exp.icon}
                    </div>

                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center text-gray-300 text-sm mt-1">
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span className="text-primary">{exp.duration}</span>
                      </div>
                      <p className="mt-2 text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                </div>

                {/* Glowing Dot */}
                <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full ${exp.type === 'job' ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-gradient-to-br from-blue-500 to-cyan-400'} items-center justify-center z-10 ${index % 2 === 0 ? '-left-4' : '-right-4'}`}>
                  <div className={`absolute inset-0 rounded-full ${exp.type === 'job' ? 'bg-primary/30' : 'bg-blue-500/30'} animate-ping`}></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Mobile Dot */}
                <div className={`lg:hidden absolute top-6 -left-1 w-5 h-5 rounded-full ${exp.type === 'job' ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-gradient-to-br from-blue-500 to-cyan-400'} flex items-center justify-center z-10`}>
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
