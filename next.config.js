const widthPlugins = require('next-compose-plugins');
const withImages = require('next-images');
let imageDomain = '';

if (process.env.NEXT_PUBLIC_BUILD === 'production') {
  require('dotenv').config({ path: './config/.env.production' });
} else {
  imageDomain = 'file.ifdev.cc';
  require('dotenv').config({ path: './config/.env.development' });
}

module.exports = widthPlugins([withImages], {
  images: {
    domains: [imageDomain],
    disableStaticImages: true
  },
  webpack(config) {
    return config;
  }
});
