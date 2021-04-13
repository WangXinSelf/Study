const TerserPlugin = require('terser-webpack-plugin')
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction =process.env.NODE_ENV == 'production';
const path = require('path');
function resolve (dir) {
return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  configureWebpack: (config) => {
      if (process.env.NODE_ENV == 'production') {
        // 为生产环境修改配置
        config.mode = 'production'
        // 将每个依赖包打包成单独的js文件
        let optimization = {
          minimizer: [new TerserPlugin({
                parallel: 4, // 并行打包
                terserOptions: {
                  ecma: undefined,
                  warnings: false,
                  parse: {},
                  compress: {
                    drop_debugger: false,  // 除了这两句是我加的，基他都是默认配置
                    drop_console: true
                  },
                  mangle: true, // Note `mangle.properties` is `false` by default.
                  module: false,
                  output: null,
                  toplevel: false,
                  nameCache: null,
                  ie8: false,
                  keep_classnames: undefined,
                  keep_fnames: false,
                  safari10: false,
                }
              })],
        }
        Object.assign(config, {
          optimization
        })
      } else {
        // 为开发环境修改配置
        config.mode = 'development'
      }
        // 配置webpack 压缩
        config.plugins.push(
          new CompressionWebpackPlugin({
            test: /\.js$|\.html$|\.css$/,
            // 超过4kb压缩
            threshold: 4096
          })
        )
    },
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined
}
