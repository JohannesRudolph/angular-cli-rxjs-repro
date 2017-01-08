import { Component, OnInit } from '@angular/core';

// This file imports .mapTo() and makes use of Observable.of(), imported in child.component.ts
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let o = Observable.of('a');
    o.mapTo('b');
  }
}
