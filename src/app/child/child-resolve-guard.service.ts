import { Injectable, } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ChildResolveGuardService implements Resolve<string>  {

  constructor() { }

  public resolve(route: ActivatedRouteSnapshot): Observable<string> {
    console.log('ChildResolveGuardService.resolve');
    return Observable.of('child').delay(10000);
  }
}
