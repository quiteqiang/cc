/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure image domains if needed
  images: {
    domains: ['framerusercontent.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
