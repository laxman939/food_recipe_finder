export const ADD_RECIPES = "ADD_RECIPES";

export function addRecipe(recipe) {
  return { type: ADD_RECIPES, recipe: recipe };
}
