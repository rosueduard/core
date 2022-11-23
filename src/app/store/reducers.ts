import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { emailsReducer, IRecipesState } from './emails-list/emails-list.reducers';
import { storeLogger } from 'ngrx-store-logger';

export interface IAppState {
  recipes: IRecipesState;
  // todo add more state: user, etc..
}

export const reducers: ActionReducerMap<IAppState> = {
  recipes: emailsReducer,
};

/**
 * STORE_LOGGER
 */
export const storeLoggerConst = storeLogger();

export const storeLoggerWrapper = (reducer): ActionReducer<any, any> => (state, action) => {
  const newReducer = storeLoggerConst(reducer);
  return newReducer(state, action);
};

/**
 * META_REDUCER
 */
export const metaReducersDev: Array<MetaReducer<any, any>> = [ storeLoggerWrapper ];
