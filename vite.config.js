export default {
    proxy: {
      // string shorthand
    //   '/foo': 'http://localhost:4567/foo',
      // with options
      '/api': {
        target: 'https://oapi.dingtalk.com/robot',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    build: {
      // Template for index.html
      index: path.resolve(__dirname, '../docs/index.html'),  //之前是'../dist/index.html'
  
      // Paths
      assetsRoot: path.resolve(__dirname, '../docs'),  // 之前是 '../dist'
      assetsSubDirectory: 'static',
      assetsPublicPath: './',    // 之前是 '/'
    }
  }
  