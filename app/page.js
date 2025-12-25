// app/page.js
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Palette, Server, Cloud } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive interfaces with React, Next.js, and Tailwind CSS'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Scalable server solutions with Node.js, Express, and databases'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered designs that enhance experience and engagement'
    },
    {
      icon: Cloud,
      title: 'Hosting & Deployment',
      description: 'Seamless deployment and maintenance on cloud platforms'
    }
  ]

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Tailwind', icon: '💨' }
  ]

  const featuredProjects = [
    {
      title: 'EduLearn',
      description: 'Gamified learning platform with interactive courses',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Taskify',
      description: 'Team collaboration and task management app',
      tech: ['Next.js', 'Firebase', 'Tailwind'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Shoply',
      description: 'Modern e-commerce platform with secure payments',
      tech: ['React', 'Express', 'Stripe'],
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            We Code{' '}
            <span className="text-accent-green bg-clip-text text-transparent bg-gradient-to-r from-accent-green to-accent-blue">
              Ideas
            </span>{' '}
            Into Reality
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Full-stack web solutions built for performance, scalability, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-accent-green text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get a Quote</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="border border-accent-green text-accent-green px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/10 transition-colors duration-300"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-gray-400 text-lg">Modern technologies for cutting-edge solutions</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-accent-green/20 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive web development solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-accent-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Some of our recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent-green/20 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-accent-green to-accent-blue opacity-80"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-green/20 text-accent-green rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/portfolio"
                    className="text-accent-green hover:text-accent-green/80 transition-colors duration-300 font-medium flex items-center space-x-1"
                  >
                    <span>View Project</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 bg-accent-green text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors duration-300"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}