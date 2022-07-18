/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: false,
  pwa: {
    dest: 'public',
    fallbacks: {
      image: '/static/images/fallback.png'
    }
  }
})