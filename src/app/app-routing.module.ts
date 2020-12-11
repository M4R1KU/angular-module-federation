import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from './dynamic-module';

const routes: Routes = [
  {
    path: 'cathedrals',
    loadChildren: () => loadRemoteModule('http://localhost:3000/remoteEntry.js', 'mf1', 'Module')
      .then(module => module.CathedralModule)
  },
  {
    path: 'cities',
    loadChildren: () => loadRemoteModule('http://localhost:4000/remoteEntry.js', 'mf2', 'Module')
      .then(module => module.CityModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cities'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
