const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/element-one/',
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: true,
});
