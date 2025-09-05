/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",               // required for static export
  images: { unoptimized: true },  // GH Pages can’t do Next.js image optimizations
  basePath: "/toys",              // 👈 your repo name
  assetPrefix: "/toys/",          // 👈 your repo name
};


export default nextConfig;