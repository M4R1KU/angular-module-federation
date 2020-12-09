import * as webpack from 'webpack';
import * as ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

export default {
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf2',
      library: { type: 'var', name: 'mf2' },
      filename: 'remoteEntry.js',
      exposes: {
        Module: './projects/mf2/src/app/city/city.module.ts'
      },
      shared: [
        '@angular/core',
        '@angular/core',
        '@angular/common',
        '@angular/common/',
        '@angular/router',
        '@angular/cdk',
        '@angular/cdk/',
        '@angular/material',
        '@angular/material/',
        'rxjs',
        'rxjs/'
      ]
    })
  ]
} as webpack.Configuration;
