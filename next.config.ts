import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip type-checking and linting during build (Netlify CI)
  // Types are still enforced locally via tsc / editor
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
