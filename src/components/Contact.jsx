import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would handle the form submission here
    console.log('Form submitted:', data);
    
    // Show success message
    toast.success('Message sent successfully!');
    
    // Reset form
    reset();
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'ppratappatil775@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 7030687357',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Pune, Maharashtra',
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/pratappatil16', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/pratappatil2003', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com/pratap_patil_1631', label: 'Instagram' },
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
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
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3 
              className="text-2xl font-bold text-white"
              variants={item}
            >
              Let's talk about <span className="text-gradient">your project</span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-400"
              variants={item}
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me using the contact information below.
            </motion.p>

            <motion.div 
              className="space-y-6"
              variants={item}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                  variants={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center text-blue-500 text-xl mr-4 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="pt-4"
              variants={item}
            >
              <h4 className="text-gray-300 font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 bg-gray-900/50 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`w-full px-4 py-3 bg-gray-900/50 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300`}
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
