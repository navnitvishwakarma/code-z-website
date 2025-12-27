// app/sitemap.xml/route.js
export async function GET() {
  const baseUrl = 'https://code-z.shop'  // Changed here
  
  const pages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}