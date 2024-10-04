// Import the bundle analyzer using the ES module syntax
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.pinimg.com',
      'upload.wikimedia.org',
      'www.ignant.com',
      'assets.aceternity.com',
      'images.unsplash.com',
      'www.youtube.com',
      'piano.io',
      'www.svgrepo.com',
      'in.pinterest.com',
      'restcountries.com',
      'assets.nesscoindustries.com',
      'www.nesscoindia.com',
      'res.cloudinary.com',
    ],
  },
  swcMinify: true,
};

// Initialize the bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Export the configuration with the bundle analyzer applied
export default bundleAnalyzer(nextConfig);
