import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    console.log('Downloading resume...');
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#240577] dark:text-white mb-4 font-mono">
            Resume
          </h2>
          <div className="w-24 h-1 bg-[#875ef4] mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-mono">
            Download my resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Resume Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 border-2 border-[#875ef4] border-opacity-20">
                <div className="aspect-[8.5/11] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-24 h-24 text-[#875ef4] mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 font-mono">
                      Paridhi Bhardwaj
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      DevOps Engineer & AI/ML Enthusiast
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#875ef4] rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <Eye className="w-8 h-8" />
              </motion.div>
            </motion.div>

            {/* Right Side - Resume Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-[#240577] dark:text-white mb-4 font-mono">
                  What's Inside
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-mono">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-[#875ef4] rounded-full"></span>
                    <span>Professional experience in DevOps and Cloud Engineering</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-[#875ef4] rounded-full"></span>
                    <span>Educational background and academic achievements</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-[#875ef4] rounded-full"></span>
                    <span>Technical skills and certifications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-[#875ef4] rounded-full"></span>
                    <span>Project highlights and accomplishments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-[#875ef4] rounded-full"></span>
                    <span>Contact information and references</span>
                  </li>
                </ul>
              </div>

              {/* Download Button */}
              <motion.button
                onClick={handleDownload}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(135, 94, 244, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#875ef4] to-[#240577] text-white p-6 rounded-xl font-semibold transition-all duration-300 group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  <span className="text-lg font-mono">Download Resume</span>
                </div>
                <p className="text-sm opacity-90 mt-2 font-mono">
                  PDF format • Last updated: January 2024
                </p>
              </motion.button>

              {/* Additional Info */}
              <div className="bg-[#875ef4] bg-opacity-10 rounded-xl p-4 text-center">
                <p className="text-sm text-[#875ef4] font-mono">
                  💡 <strong>Tip:</strong> Feel free to reach out if you'd like to discuss any specific projects or experiences in detail!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;