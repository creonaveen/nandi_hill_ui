/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'http://192.168.68.117:8001',
      },
    ];
  },
}

module.exports = nextConfig 