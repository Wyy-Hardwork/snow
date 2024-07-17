module.exports = {
  devServer: {
    proxy: {
      '/api': { // 匹配请求路径中以 /api 开头的请求
        target: 'http://localhost:3000', // 指定代理目标服务器地址
        changeOrigin: true, // 开启跨域代理
        pathRewrite: {
          '^/api': '' // 将请求路径中的 /api 前缀替换为空字符串
        }
      },
      '/img': { // 匹配请求路径中以 /api 开头的请求
        target: 'img.xjh.me', // 指定代理目标服务器地址
        changeOrigin: true, // 开启跨域代理
        pathRewrite: {
          '^/img': '' // 将请求路径中的 /api 前缀替换为空字符串
        },

        headers: {
          Host: 'img.xjh.me' // 设置请求头中的 Host 字段
        }
      },
      '/novel': { // 匹配请求路径中以 /api 开头的请求
        target: 'https://www.bilinovel.com', // 指定代理目标服务器地址
        changeOrigin: true, // 开启跨域代理
        pathRewrite: {
          '^/img': '' // 将请求路径中的 /api 前缀替换为空字符串
        },
        headers: {
          Host: 'https://www.bilinovel.com', // 设置请求头中的 Host 字段
          Referer: 'https://www.bilinovel.com'
        }
      }
    }
  },
  lintOnSave: false, //关闭eslint的；
  // 修改图标
  // pwa: {
  //     iconPaths: {
  //         favicon32: 'favicon.ico',
  //         favicon16: 'favicon.ico',
  //         appleTouchIcon: 'favicon.ico',
  //         maskIcon: 'favicon.ico',
  //         msTileImage: 'favicon.ico'
  //     }
  // }
}
