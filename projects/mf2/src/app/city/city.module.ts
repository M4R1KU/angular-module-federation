import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { CityRoutingModule } from './city-routing.module';
import { CityTableComponent } from './city-table/city-table.component';


@NgModule({
  declarations: [
    CityTableComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class CityModule { }
