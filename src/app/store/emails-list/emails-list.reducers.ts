import { createReducer, on } from '@ngrx/store';
import { loadListCompleted } from './emails-list.actions';
// import { loadMedicationPlan } from './emails-list.actions';
// import { addRecipe, removeAllRecipe, removeRecipe, selectedIdChanged } from './recipes-list.actions';

export interface IRecipesState {
  list: any[];
  selectedId: string;
}

export const initialState: IRecipesState = {
  list: [],
  selectedId: null,
};

export const emailsReducer = createReducer(
  initialState,
  // on({}, (state ) => ({...state })),
  on(loadListCompleted, (state, { list }) => ({...state, list })),
  // on(removeRecipe, (state, { recipeId }) => ({...state, list: state.list.filter((recipe) => recipe.id !== recipeId)})),
  // on(removeAllRecipe, (state) => ({ list: [], selectedId: null })),
);

