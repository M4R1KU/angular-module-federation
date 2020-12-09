import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cathedral } from '../cathedral.service';

@Component({
  selector: 'app-cathedral-list',
  templateUrl: './cathedral-list.component.html',
  styleUrls: ['./cathedral-list.component.scss']
})
export class CathedralListComponent {
  public cathedrals$: Observable<Array<Cathedral>> = this.route.data.pipe(
    map(data => data.cathedrals)
  );

  constructor(private route: ActivatedRoute) {
  }
}
