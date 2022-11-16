import { createAction, props } from '@ngrx/store';

export const loadList = createAction(
  '[Emails] Load List',
);

export const loadListCompleted = createAction(
  '[Emails] Load List Completed',
  props<{ list: any   }>()
);

export const loadListFailed = createAction(
  '[Emails] Load List Failed',
  props<{ error: any }>()
);
