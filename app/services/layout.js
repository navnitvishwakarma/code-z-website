// app/services/layout.js
export const metadata = {
  metadataBase: new URL('https://code-z.shop'),
  title: 'Services | Code-Z Web Development Vadodara',
  description: 'Professional web development services in Vadodara: Frontend, Backend, UI/UX Design, Hosting & Deployment with React, Next.js, Node.js.',
  keywords: [
    'web development services vadodara',
    'frontend development vadodara',
    'backend development vadodara',
    'ui ux design vadodara',
    'website hosting vadodara',
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
    title: 'Services | Code-Z Web Development Vadodara',
    description: 'Professional web development services in Vadodara: Frontend, Backend, UI/UX Design, Hosting & Deployment.',
    url: 'https://code-z.shop/services',
    siteName: 'Code-Z',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code-Z Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Code-Z Web Development',
    description: 'Professional web development services in Vadodara.',
    images: ['/og-image.png'],
    creator: '@codezdev',
  },
  alternates: {
    canonical: 'https://code-z.shop/services',
  },
}

export default function ServicesLayout({ children }) {
  return <>{children}</>
}