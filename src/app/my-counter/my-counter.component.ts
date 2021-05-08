//step-04
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store'; //step-09
import { increment } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html'
})
export class MyCounterComponent {
  count$: Observable<number>; //step-08

  //step-09
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  // constructor() {
  //   // TODO: Connect `this.count$` stream to the current store `count` state
  // }

  increment() {
    this.store.dispatch(increment()); //step-09
  }
}
