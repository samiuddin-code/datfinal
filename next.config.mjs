import path from 'path';

export default {
  env: {
    API_DOMAIN: 'https://sandbox.api.datconsultancy.com/web-api/v1.0',
    IMAGE_DOMAIN: 'https://sandbox.api.datconsultancy.com',
    GOOGLE_ANALYTICS: 'UA-143170471-1',
  },
  images: {
    domains: ['sandbox.api.datconsultancy.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('components');
    return config;
  },
};
