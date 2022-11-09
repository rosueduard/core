import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { getList } from './emails-list.selectors';

@Injectable({providedIn: 'root'})
export class EmailsListFacade {

  list$ = this.store.pipe(select(getList));

  constructor(private store: Store<any>) {
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

}
