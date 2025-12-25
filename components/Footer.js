// components/Footer.js
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:navnitkumarofficial@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
<div className="md:col-span-2">
  <div className="flex items-center space-x-3 mb-4">
    {/* Replace the Z with your PNG logo */}
    <div className="relative h-10 w-10">
      <Image
        src="/images/logo.png"
        alt="Code-Z Logo"
        fill
        className="object-contain"
      />
    </div>
    <span className="text-xl font-bold">Code-Z</span>
  </div>
  <p className="text-gray-400 mb-4 max-w-md">
    We build fast, scalable, and secure web solutions with passion and precision. 
    Transforming your ideas into digital reality.
  </p>
  <div className="flex space-x-4">
    {socialLinks.map((social) => (
      <a
        key={social.label}
        href={social.href}
        className="text-gray-400 hover:text-accent-green transition-colors duration-300"
        aria-label={social.label}
      >
        <social.icon size={20} />
      </a>
    ))}
  </div>
</div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-green transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>navnitkumarofficial@gmail.com</p>
              <p>+91 9801945472</p>
              <p>Vadodra, Gujrat</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Code-Z. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer