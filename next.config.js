/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "34.125.78.144",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
