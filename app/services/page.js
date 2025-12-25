// app/services/page.js
'use client'
import { motion } from 'framer-motion'
import { Check, Code, Palette, Server, Cloud, Database, Smartphone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'We create stunning, responsive user interfaces using modern frameworks.',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Performance Optimization']
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Scalable server architecture and API development for robust applications.',
      features: ['Node.js & Express', 'REST & GraphQL APIs', 'Database Design', 'Authentication', 'API Integration']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered designs that enhance experience and drive engagement.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Interaction Design']
    },
    {
      icon: Database,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from concept to deployment and maintenance.',
      features: ['Architecture Planning', 'Full Development', 'Testing & QA', 'Deployment', 'Maintenance']
    },
    {
      icon: Cloud,
      title: 'Hosting & Deployment',
      description: 'Seamless deployment on cloud platforms with ongoing maintenance.',
      features: ['Cloud Deployment', 'CI/CD Pipelines', 'Performance Monitoring', 'Security Updates', 'Backup Systems']
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Native-like web experiences that work offline and on any device.',
      features: ['PWA Development', 'Offline Functionality', 'Push Notifications', 'App-like Experience', 'Cross-Platform']
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,499',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive Design',
        'Basic SEO',
        'Contact Form',
        '1 Month Support',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom Design',
        'Advanced SEO',
        'CMS Integration',
        '3 Months Support',
        'E-commerce Ready',
        'Performance Optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$9,999+',
      description: 'For large-scale applications',
      features: [
        'Unlimited Pages',
        'Full Customization',
        'Enterprise SEO',
        'Advanced Features',
        '6 Months Support',
        'Priority Development',
        'Dedicated Team',
        '24/7 Monitoring'
      ],
      popular: false
    }
  ]

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
            Our <span className="text-accent-green">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive web development services to bring your digital vision to life
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-accent-blue" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-300">
                      <Check size={16} className="text-accent-green flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-gray-400 text-lg">Choose the perfect plan for your project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-accent-green to-accent-blue text-primary-dark' 
                    : 'bg-gray-800 text-white'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-dark text-accent-green px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.name !== 'Enterprise' && <span className="text-lg opacity-80">/project</span>}
                </div>
                <p className={`mb-6 ${tier.popular ? 'text-primary-dark/80' : 'text-gray-400'}`}>
                  {tier.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check size={16} className="flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-primary-dark text-accent-green hover:bg-gray-900'
                      : 'bg-accent-green text-primary-dark hover:bg-accent-green/90'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}