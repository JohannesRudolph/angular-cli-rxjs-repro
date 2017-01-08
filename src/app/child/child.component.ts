import { Component, OnInit } from '@angular/core';

// This file imports Obserable.of() and makes use of .mapTo(), imported in other.component.ts
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Observable.of('a').mapTo(x => 'b');
  }
}
