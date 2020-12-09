import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CathedralListResolverService } from './cathedral-list-resolver.service';
import { CathedralCardComponent } from './cathedral-list/cathedral-card/cathedral-card.component';
import { CathedralListComponent } from './cathedral-list/cathedral-list.component';
import { CathedralResolverService } from './cathedral-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CathedralListComponent,
    resolve: {
      cathedrals: CathedralListResolverService
    }
  },
  {
    path: ':id',
    component: CathedralCardComponent,
    resolve: {
      cathedral: CathedralResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CathedralRoutingModule {
}
