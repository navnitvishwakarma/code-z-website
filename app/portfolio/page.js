// app/portfolio/page.js
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { featuredProjects } from '@/data/featuredProjects'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Combine featuredProjects with additional projects if needed
  const allProjects = [
    ...featuredProjects, // These are your 3 featured projects
    // Add more projects here if you have them
    {
      id: 4,
      title: 'Blogverse',
      description: 'Content management system for bloggers with markdown support and social features.',
      shortDescription: 'CMS for bloggers with markdown support',
      image: '/projects/blogverse.png',
      category: 'full-stack',
      tech: ['Next.js', 'Sanity CMS', 'Vercel'],
      liveUrl: 'https://blogverse-demo.vercel.app',
      githubUrl: 'https://github.com/yourusername/blogverse',
      featured: false
    },

    {
      id: 5,
      title: 'Finance Dashboard',
      description: 'Real-time financial data visualization and analytics dashboard for investment tracking.',
      shortDescription: 'Financial data visualization dashboard',
      image: '/projects/finance.png',
      category: 'frontend',
      tech: ['React', 'D3.js', 'Chart.js', 'TypeScript'],
      liveUrl: 'https://finance-demo.vercel.app',
      githubUrl: 'https://github.com/yourusername/finance-dash',
      featured: false
    },
    {
      id: 6,
      title: 'HealthTrack API',
      description: 'RESTful API for health and fitness applications with user management and data analytics.',
      shortDescription: 'Health and fitness REST API',
      image: '/projects/api.png',
      category: 'backend',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveUrl: null,
      githubUrl: 'https://github.com/yourusername/healthtrack-api',
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'full-stack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter)

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-accent-green">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our latest projects and see how we transform ideas into digital solutions
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.key
                    ? 'bg-accent-green text-primary-dark'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Filter size={16} />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={`project-${project.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent-green/20 transition-all duration-300"
                >
                  {/* Project Image with Gradient Fallback */}
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-accent-green/20 to-accent-blue/20">
                    {project.image && project.image !== '/api/placeholder/600/400' ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-white/30">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-green to-accent-blue opacity-80 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    
                    {project.featured !== false && (
                      <div className="absolute top-4 left-4 bg-accent-green text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 hover:text-accent-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.shortDescription || project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      <div className="flex space-x-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-accent-green hover:text-accent-green/80 transition-colors duration-300 text-sm"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                          >
                            <Github size={14} />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                      
                      <span className="text-xs text-gray-500 capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}