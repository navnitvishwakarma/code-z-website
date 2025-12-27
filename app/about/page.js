// app/about/page.js
'use client'
import { motion } from 'framer-motion'
import { Target, Users, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const processSteps = [
    {
      step: '01',
      title: 'Concept & Planning',
      description: 'We start by understanding your vision and planning the project architecture.',
      icon: Target
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and prototypes to visualize the user experience.',
      icon: Users
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with clean, maintainable code and best practices.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Deployment & Maintenance',
      description: 'Launching your project and providing ongoing support and updates.',
      icon: ArrowRight
    }
  ]

  const teamStats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '1+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-accent-green">Code-Z</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build fast, scalable, and secure web solutions with passion and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2025, Code-Z started as a small team of passionate developers 
                  with a shared vision: to create exceptional digital experiences that make 
                  a real impact.
                </p>
                <p>
                  We believe that great web development is more than just writing code—it's 
                  about understanding your business goals, your users, and creating solutions 
                  that drive growth and success.
                </p>
                <p>
                  Today, we're proud to have helped numerous businesses transform their 
                  ideas into successful digital products, from startups to established 
                  enterprises.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {teamStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-green mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              To empower businesses with cutting-edge web solutions that are not only 
              visually stunning but also technically robust, scalable, and user-friendly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-accent-green/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-400">
                  Staying ahead of technology trends to deliver modern, future-proof solutions.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">Quality</h3>
                <p className="text-gray-400">
                  Delivering exceptional quality through rigorous testing and best practices.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-accent-green/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">Partnership</h3>
                <p className="text-gray-400">
                  Building long-term relationships based on trust, transparency, and results.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 text-lg">How we bring your ideas to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300 relative"
              >
                <div className="text-6xl font-bold text-accent-green/20 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="text-accent-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch with us today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-green text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors duration-300"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}