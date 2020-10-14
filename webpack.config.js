const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');

// const ContainerReferencePlugin = require("webpack/lib/container/ContainerReferencePlugin");
// const ContainerPlugin = require("webpack/lib/container/ContainerPlugin");

const shellConfig = {
  entry: ['./src/polyfills.ts', './src/main.ts'],
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/shell'),
    port: 5000
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        mfe1: 'mfe1'
      },
      shared: ['@angular/core', '@angular/common', '@angular/router']
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './tsconfig.app.json',
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        './src/app/app.module#AppModule'
      )
    }),
    new CopyPlugin([
      { from: 'src/assets', to: 'assets' },
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[id].[name].js',
    path: __dirname + '/dist/shell',
    chunkFilename: '[id].[chunkhash].js'
  },
  mode: 'development'
};

const mfe1Config = {
  entry: ['./projects/mf1/src/polyfills.ts', './projects/mf1/src/main.ts'],
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/mf1'),
    port: 3000
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe1',
      library: { type: 'var', name: 'mfe1' },
      filename: 'remoteEntry.js',
      exposes: {
        Component: './projects/mf1/src/app/app.component.ts'
      },
      shared: ['@angular/core', '@angular/common', '@angular/router']
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/mf1/tsconfig.app.json',
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        './projects/mf1/src/app/app.module#AppModule'
      )
    }),
    new CopyPlugin([
      { from: 'projects/mf1/src/assets', to: 'assets' },
    ]),
    new HtmlWebpackPlugin({
      template: './projects/mf1/src/index.html'
    })
  ],
  output: {
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    path: __dirname + '/dist/mf1',
    chunkFilename: '[id].[chunkhash].js'
  },
  mode: 'development'
};

module.exports = [shellConfig, mfe1Config];
