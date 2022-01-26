import { ADD_RECIPES } from "./Actions";

let initialState = {
  recipes: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPES:
      return {
        ...state,
        recipes: [action.recipe],
      };

    default:
      return state;
  }
}
