import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cathedral } from '../../cathedral.service';

@Component({
  selector: 'app-cathedral-card',
  templateUrl: './cathedral-card.component.html',
  styleUrls: ['./cathedral-card.component.scss']
})
export class CathedralCardComponent {
  public cathedral$: Observable<Cathedral> = this.route.data.pipe(
    map(data => data.cathedral)
  );

  constructor(private route: ActivatedRoute) {
  }

}
