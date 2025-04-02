/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: { unoptimized: true }, // Next.js ne supporte pas bien les images optimisées sur GitHub Pages
    basePath: '/test-actions', // Important pour que GitHub Pages gère bien les liens
    assetPrefix: '/test-actions', // Important pour que GitHub Pages gère bien les liens
  };

export default nextConfig;
