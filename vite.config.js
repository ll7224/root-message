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
    }
  }
  