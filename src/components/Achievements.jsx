import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaUsers, FaStar, FaMedal, FaTeamspeak } from 'react-icons/fa';

const achievements = [
  {
    id: 1,
    icon: <FaMedal className="text-4xl" />,
    title: 'Hackathon Winner',
    description: 'Won first place in a hackathon for developing Bills Auto Pay feature.',
    year: '2025',
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 2,
    icon: <FaUsers className="text-4xl" />,
    title: 'Smart India Hackathon',
    description: 'Participated in Smart India Hackathon.',
    year: '2024',
    color: 'from-rose-400 to-pink-500',
  },
 
  {
    id: 3,
    icon: <FaCode className="text-4xl" />,
    title: 'Codekaaze Competition ',
    description: 'Secured AIR 896 in Codekaaze Competition.',
    year: '2023',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 4,
    icon: <FaStar className="text-4xl" />,
    title: 'UPSC Exam',
    description: 'Cleared NDA Exam which is held by UPSC.',
    year: '2021',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 5,
    icon: <FaTrophy className="text-4xl" />,
    title: 'Athletics Competition ',
    description: 'Secured 1st position in Athletics Competition.',
    year: '2019',
    color: 'from-amber-400 to-yellow-500',
  },

];

const Achievements = () => {
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
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
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
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of my proudest accomplishments and recognitions throughout my career.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="group relative"
              variants={item}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))`, '--tw-gradient-from': achievement.color.split(' ')[0].replace('from-', ''), '--tw-gradient-to': achievement.color.split(' ')[1].replace('to-', '') }}></div>
              
              <div className="relative h-full p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 group-hover:border-transparent transition-all duration-300 overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
                
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${achievement.color} text-white`}>
                  {achievement.icon}
                </div>
                
                <span className="absolute top-6 right-6 text-xs font-medium px-3 py-1 rounded-full bg-gray-700/50 text-gray-300">
                  {achievement.year}
                </span>
                
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
                
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: '1+', label: 'Years Experience' },
            { number: '15+', label: 'Projects Completed' },
            { number: '10+', label: 'Awards Won' },

          ].map((stat, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
