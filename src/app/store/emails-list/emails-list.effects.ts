import { Injectable } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadList, loadListCompleted, loadListFailed } from './emails-list.actions';

@Injectable()
export class EmailsListEffects {

  loadEmailsList$ = createEffect(() => this.actions$.pipe(
      ofType(loadList),
      switchMap(() => this.http.get('http://localhost:3000/users').pipe(
          switchMap((result) => from([
              loadListCompleted({ list: result})
            ])),
          catchError((error) => from([
            loadListFailed({error}),
          ])),
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) { }

}
