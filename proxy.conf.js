const PROXY_CONFIG = [
  {
    context: [
      '/mf1'
    ],
    target: 'http://localhost:3000/',
    changeOrigin: true,
    pathRewrite: {
      '^/mf1': '',
    }
  },
];

module.exports = PROXY_CONFIG;
