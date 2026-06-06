/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip type-checking and linting during Netlify CI builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
