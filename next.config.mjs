/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: 'https://picsum.photos/200/300',
          },
        ],
      },
};

export default nextConfig;
