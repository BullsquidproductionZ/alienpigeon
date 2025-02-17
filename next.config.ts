import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: '/alienpigeon',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
