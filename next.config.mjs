/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.ifood-static.com.br',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
};

export default nextConfig;

//https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202307251908_1TJ8_i.jpg