import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CathedralModule } from './cathedral.module';
import { Cathedral, CathedralService } from './cathedral.service';

@Injectable()
export class CathedralResolverService implements Resolve<Cathedral> {
  constructor(private service: CathedralService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cathedral> | Promise<Cathedral> | Cathedral {
    const id = route.paramMap.get('id');
    return this.service.read().find(c => c.id === id);
  }

}
