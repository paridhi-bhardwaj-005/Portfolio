import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Filter, Star } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Get all unique tech stack items
  const allTechStack = Array.from(new Set(projects.flatMap(project => project.techStack)));
  const filters = ['all', ...allTechStack];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.techStack.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#240577] dark:text-white mb-4 font-mono">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#875ef4] mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-mono">
            A collection of projects showcasing my skills in DevOps, AI/ML, and full-stack development
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center space-x-2 mr-4">
            <Filter className="w-5 h-5 text-[#875ef4]" />
            <span className="text-[#875ef4] font-mono font-semibold">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#875ef4] text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#875ef4] hover:text-white'
                }`}
              >
                {filter === 'all' ? 'All' : filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#875ef4] transition-all duration-300"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-[#875ef4] text-white px-3 py-1 rounded-full text-xs font-mono flex items-center space-x-1"
                    >
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </motion.div>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Animated Border Glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      background: hoveredProject === project.id 
                        ? 'linear-gradient(90deg, #875ef4, #4d2ca4, #875ef4, #4d2ca4)'
                        : 'none',
                      backgroundSize: '400% 400%',
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-t-xl"
                    style={{
                      animation: hoveredProject === project.id ? 'gradient-flow 3s ease infinite' : 'none',
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#240577] dark:text-white mb-2 font-mono">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-mono text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#875ef4] bg-opacity-10 text-[#875ef4] rounded-full text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex space-x-4"
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-[#240577] text-white rounded-lg hover:bg-[#875ef4] transition-colors font-mono text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-2 px-4 py-2 border-2 border-[#875ef4] text-[#875ef4] rounded-lg hover:bg-[#875ef4] hover:text-white transition-colors font-mono text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Projects;