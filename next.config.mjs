/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'export',
  images: {
    unoptimized: true, // required for next export
   
  },
  basePath: '/toys/', // only if using GitHub Pages under a repo
};

export default nextConfig;
  

