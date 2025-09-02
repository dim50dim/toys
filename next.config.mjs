/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'export',
  images: {
    unoptimized: true, // required for next export
    domains: ['images.unsplash.com'], // optional, safe to keep
  },
//   basePath: '/<repo-name>', // only if using GitHub Pages under a repo
};

export default nextConfig;
  

