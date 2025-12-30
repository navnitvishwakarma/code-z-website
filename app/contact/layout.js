// app/contact/layout.js
export const metadata = {
  metadataBase: new URL('https://code-z.shop'),
  title: 'Contact Code-Z | Web Development Services in Vadodara',
  description: 'Contact Code-Z for professional web development services in Vadodara. Get quotes for React, Next.js, Node.js projects. Available for hire.',
  keywords: [
    'contact web developer vadodara',
    'hire developer vadodara',
    'web development quote vadodara',
    'get in touch code-z',
    'web development services contact',
  ],
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
  openGraph: {
    title: 'Contact Code-Z | Web Development Services in Vadodara',
    description: 'Contact Code-Z for professional web development services in Vadodara. Get quotes for React, Next.js, Node.js projects.',
    url: 'https://code-z.shop/contact',
    siteName: 'Code-Z',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Code-Z Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Code-Z | Web Development Services',
    description: 'Contact Code-Z for professional web development services in Vadodara.',
    images: ['/og-image.png'],
    creator: '@codezdev',
  },
  alternates: {
    canonical: 'https://code-z.shop/contact',
  },
}

export default function ContactLayout({ children }) {
  return <>{children}</>
}