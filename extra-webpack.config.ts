import * as webpack from 'webpack';
import * as ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

export default {
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        '@angular/core': { eager: true },
        '@angular/common': { eager: true },
        '@angular/common/': { eager: true },
        '@angular/router': { eager: true },
        '@angular/cdk': { eager: true },
        '@angular/cdk/': { eager: true },
        '@angular/material': { eager: true },
        '@angular/material/': { eager: true },
        rxjs: { eager: true },
        'rxjs/': { eager: true }
      }
    })
  ]
} as webpack.Configuration;
