import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { OtherComponent } from './other/other.component';
import { EmptyComponent } from './empty/empty.component';
import { ParentResolveGuardService } from './parent-resolve-guard.service';
import { TestComponent } from './test/test.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: TestComponent,
    resolve: {
      parent: ParentResolveGuardService
    },
    children: [{
      path: 'child',
      loadChildren: 'app/child/child.module#ChildModule',
    }]
  },
  {
    path: 'other',
    loadChildren: 'app/other/other.module#OtherModule'
  }, {
    path: '',
    component: EmptyComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ParentResolveGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
