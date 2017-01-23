import { Injectable, } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ParentResolveGuardService implements Resolve<string>  {

  constructor() { }



  public resolve(route: ActivatedRouteSnapshot): Observable<string> {
    console.log('ParentResolveGuardService.resolve');
    return Observable.of('parent');
  }
}
