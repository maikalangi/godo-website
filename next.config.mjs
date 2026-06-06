/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip TypeScript type-checking during CI builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
