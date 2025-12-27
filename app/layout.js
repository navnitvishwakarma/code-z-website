// app/layout.js - UPDATED FOR code-z.shop
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

// SEO OPTIMIZED METADATA FOR code-z.shop
export const metadata = {
  // Dynamic titles
  title: {
    default: 'Code-Z | Full Stack Web Development Agency | Vadodara',
    template: '%s | Code-Z Web Development'
  },
  
  // Optimized description (155-160 characters)
  description: 'Professional full-stack web development services in Vadodara. We build fast, scalable web applications with React, Next.js, Node.js. Transform ideas into digital reality.',
  
  // Keywords (focus on your location + services)
  keywords: [
    'web development company vadodara',
    'full stack developer vadodara', 
    'website development vadodara',
    'React development company',
    'Next.js developers',
    'Node.js development',
    'web application development',
    'UI/UX design vadodara',
    'custom website development'
  ],
  
  // OPEN GRAPH for social media
  openGraph: {
    title: 'Code-Z | Professional Web Development Agency | Vadodara',
    description: 'Transform your ideas into digital reality with professional web development services in Vadodara.',
    url: 'https://code-z.shop',
    siteName: 'Code-Z',
    locale: 'en_IN', // India locale
    type: 'website',
    images: [
      {
        url: 'https://code-z.shop/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code-Z Web Development Agency',
      },
    ],
  },
  
  // TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Code-Z | Web Development Agency',
    description: 'Professional full-stack web development services in Vadodara.',
    images: ['https://code-z.shop/og-image.png'],
    creator: '@codezdev',
  },
  
  // ROBOTS.TXT equivalent
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // ADD LATER: Google Search Console verification
  // verification: {
  //   google: 'google-site-verification=YOUR_CODE_HERE',
  // },
  
  // Canonical URL
  alternates: {
    canonical: 'https://code-z.shop',
  },
  
  // Viewport for mobile optimization
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* FAVICON */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* STRUCTURED DATA for Local Business (Vadodara) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Code-Z",
              "alternateName": "Code-Z Web Development",
              "description": "Professional full-stack web development company based in Vadodara, Gujarat",
              "url": "https://code-z.shop",
              "logo": "https://code-z.shop/logo.png",
              "telephone": "+91-9801945472",
              "email": "navnitkumarofficial@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Vadodara",
                "addressLocality": "Vadodara",
                "addressRegion": "Gujarat",
                "postalCode": "391760",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "22.3072",
                "longitude": "73.1812"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://github.com/navnitvishwakarma",
                "https://linkedin.com/in/navnitvishwakarma",
                "https://instagram.com/code_z.dev"
              ],
              "priceRange": "₹₹₹",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "22.3072",
                  "longitude": "73.1812"
                },
                "geoRadius": "100000"
              }
            })
          }}
        />
        
        {/* ADDITIONAL Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Code-Z",
              "alternateName": "Code-Z Web Development",
              "url": "https://code-z.shop",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://code-z.shop/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* ADD LATER: Google Analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script> */}
      </head>
      <body className={`${inter.className} bg-primary-dark text-white min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}