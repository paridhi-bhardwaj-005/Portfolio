import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Brain } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '5+', label: 'Projects', icon: Code },
    { number: '5+', label: 'Certifications', icon: Cloud },
    { number: '15+', label: 'Tools Mastered', icon: Brain },
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

        {/* Full-width Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-mono space-y-4">
            <p>
              As a dedicated <span className="text-[#875ef4] font-semibold">DevOps Engineer</span> and <span className="text-[#875ef4] font-semibold">AI/ML Enthusiast</span>, I am passionate about leveraging technology to solve real-world problems and drive innovation. My journey in technology began with a fascination for how systems interact and scale, which naturally led me to the world of cloud computing and automation. Over the years, I have honed my skills in architecting, deploying, and maintaining robust cloud infrastructures, ensuring high availability, security, and cost-effectiveness for a variety of projects.
            </p>
            <p>
              My academic background in Computer Science, combined with hands-on experience in the industry, has equipped me with a deep understanding of both foundational principles and cutting-edge advancements. I have worked extensively with <span className="text-[#875ef4] font-semibold">AWS</span> and <span className="text-[#875ef4] font-semibold">GCP</span>, utilizing tools such as <span className="text-[#875ef4] font-semibold">Terraform</span>, <span className="text-[#875ef4] font-semibold">Kubernetes</span>, and <span className="text-[#875ef4] font-semibold">Docker</span> to automate deployments and streamline operations. My approach emphasizes infrastructure as code, continuous integration and delivery, and proactive monitoring to ensure seamless and reliable service delivery.
            </p>
            <p>
              In addition to my DevOps expertise, I am deeply interested in the intersection of artificial intelligence and operations. I have explored how machine learning can be integrated into DevOps pipelines to enable predictive analytics, intelligent automation, and smarter incident response. This multidisciplinary perspective allows me to design solutions that are not only efficient but also adaptive and forward-thinking.
            </p>
            <p>
              Beyond technical implementation, I am a strong advocate for open-source collaboration and continuous learning. I regularly contribute to community projects, write technical articles, and mentor aspiring engineers. I believe that sharing knowledge and fostering a culture of curiosity are essential for both personal and collective growth in the tech industry.
            </p>
            <p>
              When I am not immersed in code or cloud architecture diagrams, I enjoy exploring new technologies, attending industry conferences, and engaging with thought leaders in the DevOps and AI/ML communities. My goal is to remain at the forefront of technological advancements and to empower others to do the same through mentorship and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
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
    </section>
  );
};

export default About;