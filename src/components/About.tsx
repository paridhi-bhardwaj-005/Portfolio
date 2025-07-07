import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Brain, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '5+', label: 'Projects', icon: Code },
    { number: '10+', label: 'Certifications', icon: Cloud },
    { number: '15+', label: 'Tools Mastered', icon: Brain },
    { number: '100%', label: 'Passion', icon: Heart },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#240577] dark:text-white mb-4 font-mono">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#875ef4] mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-[#240577] to-[#875ef4] rounded-2xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Paridhi Bhardwaj"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#875ef4] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
              >
                &lt;/&gt;
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-mono space-y-4">
              <p>
                I'm a passionate <span className="text-[#875ef4] font-semibold">DevOps Engineer</span> and 
                <span className="text-[#875ef4] font-semibold"> AI/ML Enthusiast</span> with a deep love for 
                cloud technologies and automation. Currently pursuing my B.Tech in Computer Science, 
                I've been on an exciting journey of transforming complex problems into elegant solutions.
              </p>
              
              <p>
                My expertise spans across <span className="text-[#875ef4] font-semibold">cloud platforms</span> like AWS and GCP, 
                where I architect scalable infrastructure using tools like Terraform, Kubernetes, and Docker. 
                I'm particularly fascinated by the intersection of DevOps and AI, constantly exploring how 
                machine learning can enhance automation and operational efficiency.
              </p>
              
              <p>
                When I'm not designing CI/CD pipelines or training models, you'll find me contributing to 
                open-source projects, writing technical blogs, or experimenting with the latest cloud-native 
                technologies. I believe in the power of continuous learning and sharing knowledge with the community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center border-2 border-transparent hover:border-[#875ef4] transition-colors group"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#875ef4] group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-[#240577] dark:text-white font-mono">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;