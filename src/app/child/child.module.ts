import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ChildComponent } from './child.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: ChildComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ChildComponent]
})
export class ChildModule { }
