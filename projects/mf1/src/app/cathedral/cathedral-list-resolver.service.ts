import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CathedralModule } from './cathedral.module';
import { Cathedral, CathedralService } from './cathedral.service';

@Injectable()
export class CathedralListResolverService implements Resolve<Array<Cathedral>> {
  constructor(private service: CathedralService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Cathedral>> | Promise<Array<Cathedral>> | Array<Cathedral> {
    return this.service.read();
  }

}
