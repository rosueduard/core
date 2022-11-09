import { ActionReducerMap } from '@ngrx/store';
import { emailsReducer, IRecipesState } from './emails-list/emails-list.reducers';

export interface IAppState {
  recipes: IRecipesState;
  // todo add more state: user, etc..
}

export const reducers: ActionReducerMap<IAppState> = {
  recipes: emailsReducer,
};
