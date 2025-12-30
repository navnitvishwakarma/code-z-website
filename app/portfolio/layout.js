// app/portfolio/layout.js
export const metadata = {
  metadataBase: new URL('https://code-z.shop'),
  title: 'Portfolio | Code-Z Web Development Projects',
  description: 'View our portfolio of web development projects including Arya Engineering, RR Admission, GuruKul-x, Shoply, and other full-stack applications.',
  keywords: [
    'web development portfolio vadodara',
    'projects by code-z',
    'arya engineering website',
    'rr admission portal',
    'react projects vadodara',
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
    title: 'Portfolio | Code-Z Web Development Projects',
    description: 'View our portfolio of web development projects including Arya Engineering, RR Admission, and other full-stack applications.',
    url: 'https://code-z.shop/portfolio',
    siteName: 'Code-Z',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code-Z Portfolio Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Code-Z Web Development',
    description: 'View our portfolio of web development projects.',
    images: ['/og-image.png'],
    creator: '@codezdev',
  },
  alternates: {
    canonical: 'https://code-z.shop/portfolio',
  },
}

export default function PortfolioLayout({ children }) {
  return <>{children}</>
}