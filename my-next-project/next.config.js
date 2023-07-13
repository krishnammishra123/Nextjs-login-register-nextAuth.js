/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    NEXTAUTH_SECRET:"iamthebossofthisunivercity"
  },
};

module.exports = nextConfig
