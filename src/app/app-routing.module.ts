import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { load } from './dynamic-module';

const routes: Routes = [
  {
    path: 'cathedrals',
    loadChildren: () => load('http://localhost:3000/', 'mf1', 'Module').pipe(
      map((module: any) => module.CathedralModule)
    ).toPromise()
  },
  {
    path: 'cities',
    loadChildren: () => load('http://localhost:4000/', 'mf2', 'Module').pipe(
      map((module: any) => module.CityModule)
    )
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
