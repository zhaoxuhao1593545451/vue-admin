const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    /* 使用代理 */
    proxy: {
      '/api': {
          /* 目标代理服务器地址 */
          target: 'https://qqlykm.cn',
          pathRewrite: {
            '^/api': '' //规定请求地址以什么作为开头
          },
          /* 允许跨域 */
          changeOrigin: true,
          ws:true
      },
    },
  }
});
