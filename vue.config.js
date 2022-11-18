const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/element-one/' : '/',
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: true,
});
