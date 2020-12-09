const PROXY_CONFIG = [
  {
    context: [
      '/mf1'
    ],
    target: 'http://localhost:3000/',
    rewritePath: '',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/mf1': '', // rewrite path
    }
  },
];

module.exports = PROXY_CONFIG;
