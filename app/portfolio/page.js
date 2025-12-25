// app/portfolio/page.js
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'EduLearn',
      description: 'A gamified learning platform with interactive courses, progress tracking, and achievement systems.',
      image: '/api/placeholder/600/400',
      category: 'full-stack',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://edulearn.demo',
      githubUrl: 'https://github.com/codez/edulearn',
      featured: true
    },
    {
      id: 2,
      title: 'Taskify',
      description: 'Team collaboration and task management application with real-time updates and project tracking.',
      image: '/api/placeholder/600/400',
      category: 'full-stack',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://taskify.demo',
      githubUrl: 'https://github.com/codez/taskify',
      featured: true
    },
    {
      id: 3,
      title: 'Shoply',
      description: 'Modern e-commerce platform with secure payments, inventory management, and analytics dashboard.',
      image: '/api/placeholder/600/400',
      category: 'full-stack',
      tech: ['React', 'Express', 'Stripe', 'PostgreSQL'],
      liveUrl: 'https://shoply.demo',
      githubUrl: 'https://github.com/codez/shoply',
      featured: true
    },
    {
      id: 4,
      title: 'Blogverse',
      description: 'Content management system for bloggers with markdown support and social features.',
      image: '/api/placeholder/600/400',
      category: 'full-stack',
      tech: ['Next.js', 'Sanity CMS', 'Vercel'],
      liveUrl: 'https://blogverse.demo',
      githubUrl: 'https://github.com/codez/blogverse',
      featured: false
    },
    {
      id: 5,
      title: 'Finance Dashboard',
      description: 'Real-time financial data visualization and analytics dashboard for investment tracking.',
      image: '/api/placeholder/600/400',
      category: 'frontend',
      tech: ['React', 'D3.js', 'Chart.js', 'TypeScript'],
      liveUrl: 'https://finance-demo.com',
      githubUrl: 'https://github.com/codez/finance-dash',
      featured: false
    },
    {
      id: 6,
      title: 'HealthTrack API',
      description: 'RESTful API for health and fitness applications with user management and data analytics.',
      image: '/api/placeholder/600/400',
      category: 'backend',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      liveUrl: null,
      githubUrl: 'https://github.com/codez/healthtrack-api',
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
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent-green/20 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-accent-green to-accent-blue opacity-80 relative">
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-accent-green text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-accent-green hover:text-accent-green/80 transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </a>
                      )}
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