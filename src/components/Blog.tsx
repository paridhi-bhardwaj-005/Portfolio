import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Calendar, Clock, Tag, Heart, TrendingUp } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  const tagFilters = ['all', ...allTags];

  // Filter posts based on search and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#240577] dark:text-white mb-4 font-mono">
            Technical Blog
          </h2>
          <div className="w-24 h-1 bg-[#875ef4] mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-mono">
            Sharing knowledge and insights about DevOps, Cloud, AI/ML, and modern development practices
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#875ef4] font-mono"
            />
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {tagFilters.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
                  selectedTag === tag
                    ? 'bg-[#875ef4] text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#875ef4] hover:text-white'
                }`}
              >
                {tag === 'all' ? 'All Topics' : tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#875ef4] transition-all duration-300"
            >
              {/* Post Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => handleLike(post.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full transition-colors ${
                      likedPosts.has(post.id)
                        ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                  </motion.button>
                </div>

                <h3 className="text-xl font-bold text-[#240577] dark:text-white mb-3 font-mono group-hover:text-[#875ef4] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-mono text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-[#875ef4] bg-opacity-10 text-[#875ef4] rounded-full text-xs font-mono"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-[#875ef4] hover:text-[#6b46c1] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-sm font-semibold">Read More</span>
                  <TrendingUp className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Progress Bar (simulated) */}
              <div className="h-1 bg-gray-200 dark:bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.random() * 100}%` }}
                  transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-[#875ef4] to-[#240577]"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-mono">No articles found</p>
              <p className="text-sm font-mono">Try adjusting your search or filter criteria</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;