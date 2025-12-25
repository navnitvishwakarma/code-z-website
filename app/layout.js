// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'  // Changed from '@/components/Navbar'
import Footer from '../components/Footer'  // Changed from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code-Z - Full Stack Web Development',
  description: 'We code ideas into reality.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-primary-dark text-white min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}