const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    /* 使用代理 */
    proxy: {
      '/test1': {
        /* 目标代理服务器地址 */
        target: 'http://www.web-jshtml.cn/productapi',
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          '^/test1': ''
        },
        ws:true
      },
    },
  }
});
