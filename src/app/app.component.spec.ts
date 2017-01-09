/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
  });

  it('violating null check should raise compilation error', () => {
    let string = '';
    string = null;

    const array = [];
    array.push(1);
  });
});
