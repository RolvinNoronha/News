/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = {
  env: {
    MEDIASTACK_API_KEY: process.env.MEDIASTACK_API_KEY,
  },
};

module.exports = nextConfig
