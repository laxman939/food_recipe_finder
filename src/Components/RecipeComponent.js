import React, { useState } from "react";
import styled from "styled-components";

//Material UI -- Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

//Redux
import { shallowEqual, useSelector } from "react-redux";

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 17px;
  width: 255px;
  border-radius: 10px;
  box-shadow: 1px 4px 10px 0 #5e2104f7;
  zoom: 100%;
`;

const RecipeImage = styled.img`
  height: 235px;
  border-radius: 6px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

const RecipeName = styled.span`
  font-size: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  color: #a31d0f;
  margin: 8px 0;
  text-align: center;
`;

const RecipeType = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #7e0404;
`;

const RecipeSeeMore = styled(RecipeType)`
  font-size: 12px;
  font-weight: 600;
  padding: 2px;
  width: 65px;
  color: red;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 4px;
`;

const RecipeInfo1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
`;

function RecipeComponent({ recipeList }) {
  const allRecipes = useSelector((state) => state.recipes, shallowEqual);

  // console.log("Props " + recipeList[0].recipe.label); --> Using props (one time space)
  // console.log("store " + allRecipes[0].recipe.label); --> Using redux state (required two times space){Working}
  console.log(allRecipes);
  const [show, setShow] = useState(false);

  //De-Structuring
  // const { ingredients, image, label, url } = recipeList.recipe;
  // console.log(ingredients, image, label, url);

  return (
    <>
      <Dialog open={show}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeList.length &&
                recipeList[0].recipe.ingredients.map((ingredient, index) => (
                  <tr key={index}>
                    <td>{ingredient.text}</td>
                    <td>{ingredient.weight}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <RecipeSeeMore onClick={() => setShow(false)}>Close</RecipeSeeMore>
        </DialogActions>
      </Dialog>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipe, index) => (
            <RecipeContainer key={index} className="container">
              <RecipeImage src={recipe.recipe.image} />
              <RecipeName>{recipe.recipe.label}</RecipeName>
              <RecipeInfo1>
                <RecipeType>
                  <b>Meal-Type: </b>
                  {recipe.recipe.mealType[0]}
                </RecipeType>
                <RecipeSeeMore onClick={() => window.open(recipe.recipe.url)}>
                  See more...
                </RecipeSeeMore>
              </RecipeInfo1>
              <RecipeSeeMore onClick={() => setShow(true)}>
                Ingredients
              </RecipeSeeMore>
              {/* <RecipeType>
              <b>Meal-Type: </b>
              {item.recipe.mealType[0]}
            </RecipeType> */}
            </RecipeContainer>
          ))
        ) : (
          <h3>Please use Space After Typing...</h3>
        )}
      </RecipeListContainer>
      {/*  <h1>Using Redux Store</h1>
      {allRecipes[0].map((item) => (
        <RecipeListContainer>
          {allRecipes[0].length &&
            allRecipes[0].map((eachRecipe, index) => (
              <div key={index}>
                <h2>{eachRecipe.recipe.label}</h2>
                <img src={eachRecipe.recipe.image} alt="" />
              </div>
            ))}
        </RecipeListContainer>
      ))} */}
    </>
  );
}

export default RecipeComponent;
