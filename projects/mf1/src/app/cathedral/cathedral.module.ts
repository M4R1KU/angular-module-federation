import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CathedralListResolverService } from './cathedral-list-resolver.service';
import { CathedralCardComponent } from './cathedral-list/cathedral-card/cathedral-card.component';
import { CathedralListComponent } from './cathedral-list/cathedral-list.component';
import { CathedralResolverService } from './cathedral-resolver.service';

import { CathedralRoutingModule } from './cathedral-routing.module';
import { CathedralService } from './cathedral.service';


@NgModule({
  declarations: [
    CathedralListComponent,
    CathedralCardComponent
  ],
  imports: [
    CommonModule,
    CathedralRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    CathedralService,
    CathedralListResolverService,
    CathedralResolverService
  ]
})
export class CathedralModule {
}
