import * as webpack from 'webpack';
import * as ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

export default {
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf1',
      library: { type: 'var', name: 'mf1' },
      filename: 'remoteEntry.js',
      exposes: {
        Module: './projects/mf1/src/app/cathedral/cathedral.module.ts'
      },
      shared: [
        '@angular/core',
        '@angular/common',
        '@angular/common/',
        '@angular/router',
        '@angular/cdk/',
        '@angular/material/',
        'rxjs',
        'rxjs/'
      ]
    })
  ]
} as webpack.Configuration;
