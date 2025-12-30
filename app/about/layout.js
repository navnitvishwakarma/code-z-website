// app/about/layout.js
export const metadata = {
  metadataBase: new URL('https://code-z.shop'),
  title: 'About Code-Z | Web Development Company in Vadodara',
  description: 'Learn about Code-Z web development company in Vadodara. Our mission, team, and development process for building exceptional web solutions.',
  keywords: [
    'about code-z vadodara',
    'web development team vadodara',
    'our process vadodara',
    'company mission vadodara',
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
    title: 'About Code-Z | Web Development Company in Vadodara',
    description: 'Learn about Code-Z web development company in Vadodara. Our mission, team, and development process.',
    url: 'https://code-z.shop/about',
    siteName: 'Code-Z',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Code-Z Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Code-Z | Web Development Company',
    description: 'Learn about Code-Z web development company in Vadodara.',
    images: ['/og-image.png'],
    creator: '@codezdev',
  },
  alternates: {
    canonical: 'https://code-z.shop/about',
  },
}

export default function AboutLayout({ children }) {
  return <>{children}</>
}