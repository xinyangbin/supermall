// const path = require('path')

// function resolve (dir) {
//   return path.join(__dirname, '..', dir)
// }

module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        "@": 'src',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'assets': '@/assets',
        'views': '@/views'
      // '@': resolve('src'),
      // 'assets': resolve('@/assets'),
      // 'components': resolve('@/components'),
      // 'pages': resolve('@/pages')
      }
    }
  }
}