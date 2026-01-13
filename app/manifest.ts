import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

  return {
    name: 'Marci Metzger Homes',
    short_name: 'Marci Homes',
    description:
      'Pahrump Realtor — Marci Metzger (The Ridge Realty Group). Residential & commercial real estate across Nevada.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070a10',
    theme_color: '#0038A8',
    icons: [
      {
        src: `${siteUrl}/favicon.ico`,
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
