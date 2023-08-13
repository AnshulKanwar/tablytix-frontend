/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "34.31.124.240",
        port: "",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://34.31.124.240:80/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
