module.exports = {
  publicPath: "./", // 基本路径
  outputDir: "dist", // 输出文件目录
  devServer: {
    port: 8200,
  },
  configureWebpack: {
    externals: {
      AMap: "AMap",
    },
  },
};
