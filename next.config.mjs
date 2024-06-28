/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.ifood-static.com.br',
        port: '',
        pathname: '/image/upload/t_low/pratos/**',
      },
    ],
  },
};

export default nextConfig;

