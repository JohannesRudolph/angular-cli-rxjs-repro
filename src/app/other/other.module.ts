import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OtherComponent } from './other.component';

// needs to be exported for AOT
export const ROUTES: Route[] = [
  {
    path: '',
    component: OtherComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [OtherComponent]
})
export class OtherModule { }
