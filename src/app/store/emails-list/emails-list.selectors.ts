import { createSelector } from '@ngrx/store';
import { IAppState } from '../reducers';
import { IRecipesState } from './emails-list.reducers';

export const getList = createSelector(
  (state: IAppState) => state.recipes, (state: IRecipesState) => state.list
);

