/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "books.google.com",
      },
    ],
  },
};
