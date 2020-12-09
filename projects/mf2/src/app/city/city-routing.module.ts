import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityTableComponent } from './city-table/city-table.component';

const routes: Routes = [
  {
    path: '',
    component: CityTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
