import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Briefcase, ExternalLink, Calendar } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeTab, setActiveTab] = useState<'education' | 'certification' | 'work'>('work');

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certification', label: 'Certifications', icon: Award },
  ];

  const filteredExperiences = experiences.filter(exp => exp.type === activeTab);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#240577] dark:text-white mb-4 font-mono">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-[#875ef4] mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-mono">
            A timeline of my education, certifications, and professional experiences
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-mono text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-[#875ef4] text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#875ef4] hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#875ef4] opacity-30" />

          {filteredExperiences.map((experience, index) => (
            <motion.div
              key={`${experience.type}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#875ef4] rounded-full flex items-center justify-center z-10 shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(135, 94, 244, 0.1)' }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-[#875ef4] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-[#875ef4]" />
                      <span className="text-sm text-[#875ef4] font-mono font-semibold">
                        {experience.duration}
                      </span>
                    </div>
                    {experience.verificationUrl && (
                      <motion.a
                        href={experience.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-[#875ef4] hover:text-[#6b46c1] transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#240577] dark:text-white mb-2 font-mono">
                    {experience.title}
                  </h3>
                  <p className="text-[#875ef4] font-semibold mb-4 font-mono">
                    {experience.organization}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 font-mono text-sm flex items-start">
                        <span className="text-[#875ef4] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {experience.skills && (
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#875ef4] bg-opacity-10 text-[#875ef4] rounded-full text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;