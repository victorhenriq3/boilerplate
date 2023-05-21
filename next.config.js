const withPWA = require('next-pwa')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
})

module.exports = nextConfig