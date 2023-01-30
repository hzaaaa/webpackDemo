const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
// const toml = require('toml');
// const yaml = require('yamljs');
// const json5 = require('json5');
console.log('__dirname', __dirname);
module.exports = (env) => {
  console.log(env);
  return {
    mode: 'development',
    //   entry: './src/index.js',
    entry: {
      index: './src/index.js',
      // another: './src/another-module.js',
      // index: {
      //     import: './src/index.js',
      //     dependOn: 'shared',
      // },
      // another: {
      //     import: './src/another-module.js',
      //     dependOn: 'shared',
      // },
      // shared: 'lodash',
    },
    output: {
      // filename: 'main.js',
      // filename: 'bundle.js',
      // filename: '[name].bundle.js',
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
      // new WebpackManifestPlugin({})
    ],
    optimization: {
      moduleIds: 'deterministic', //固定moduleId 防止 vendor bundle 会随着自身的 module.id 的变化，而发生变化。
      runtimeChunk: 'single', //防止一个模块被实例化多次
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    // optimization: {
    //     runtimeChunk: 'single',//防止一个模块被实例化多次
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    devServer: {
      static: './dist',
      client: {
        logging: 'info',
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          // 打包其他资源
          // exclude 排除, 除了html,css,js文件外所有文件
          // 都是用file-loader来处理, 包括字体图标
          exclude: /\.(html|css|js)$/,
          loader: 'file-loader',
        },
      ],
    },
    //   module: {
    //     rules: [
    //       {
    //         test: /\.css$/i,
    //         use: ['style-loader', 'css-loader'],
    //       },
    //       {
    //         test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //         type: 'asset/resource',
    //       },
    //       {
    //         test: /\.(woff|woff2|eot|ttf|otf)$/i,
    //         type: 'asset/resource',

    //       },
    //       {
    //         test: /\.(csv|tsv)$/i,
    //         use: ['csv-loader'],
    //       },
    //       {
    //         test: /\.xml$/i,
    //         use: ['xml-loader'],
    //       },
    //       {
    //         test: /\.toml$/i,
    //         type: 'json',
    //         parser: {
    //           parse: toml.parse,
    //         },
    //       },
    //       {
    //         test: /\.yaml$/i,
    //         type: 'json',
    //         parser: {
    //           parse: yaml.parse,
    //         },
    //       },
    //       {
    //         test: /\.json5$/i,
    //         type: 'json',
    //         parser: {
    //           parse: json5.parse,
    //         },
    //       },
    //     ],
    //   },
  };
};
