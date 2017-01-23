import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ChildComponent } from './child.component';
import { ChildResolveGuardService } from './child-resolve-guard.service';

export const ROUTES: Route[] = [
  {
    path: '',
    component: ChildComponent,
    resolve: {
      child: ChildResolveGuardService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ChildComponent],
  providers: [ChildResolveGuardService]
})
export class ChildModule { }
