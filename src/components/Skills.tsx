import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))];
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#240577] dark:text-white mb-4 font-mono">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-[#875ef4] mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-mono">
            Here are the technologies and tools I work with to build amazing solutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-mono text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-[#875ef4] text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#875ef4] hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-gray-700 p-1 rounded-lg shadow-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#875ef4] text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-all ${
                viewMode === 'list'
                  ? 'bg-[#875ef4] text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              List View
            </button>
          </div>
        </motion.div>

        {/* Skills Display */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}`}>
          {filteredSkills.map((skill, index) => {
            const IconComponent = Icons[skill.icon as keyof typeof Icons] as React.ComponentType<any>;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${
                  viewMode === 'grid' 
                    ? 'bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#875ef4]'
                    : 'bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between'
                }`}
              >
                <div className={`${viewMode === 'grid' ? 'text-center' : 'flex items-center space-x-4'}`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${viewMode === 'grid' ? 'mx-auto mb-4' : ''} w-12 h-12 bg-gradient-to-br from-[#240577] to-[#875ef4] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className={viewMode === 'grid' ? 'text-center' : 'flex-1'}>
                    <h3 className="text-lg font-semibold text-[#240577] dark:text-white group-hover:text-[#875ef4] transition-colors font-mono">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                      {skill.category}
                    </p>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className={`${viewMode === 'grid' ? 'mt-4' : 'w-32'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      Proficiency
                    </span>
                    <span className="text-xs text-[#875ef4] font-bold font-mono">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-[#875ef4] to-[#240577] h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;