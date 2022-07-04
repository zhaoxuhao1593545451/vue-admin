const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css:{
    loaderOptions:{
      sass:{
        data:`@import '/src/assets/styles/base.scss'`
      }
    }
  }
});
