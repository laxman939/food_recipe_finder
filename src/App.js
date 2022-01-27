import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";

//Redux
import { useDispatch } from "react-redux";
import { addRecipe } from "./Components/redux/Actions";

import "./style.css";
import HeadComponent from "./Components/HeadComponent";
import RecipeComponent from "./Components/RecipeComponent";

const API_ID = "568c35c4";
const API_KEY = "db8fe679d0db6de4e1afe9c8a5481eee";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [recipeList, setRecipeList] = useState([]);

  //Redux
  const dispatch = useDispatch();

  //Api call
  const fetchRecipe = async (searchValue) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchValue}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=50&calories=591-722&health=alcohol-free`,
      { mode: "cors" }
    );
    console.log("First " + response.data.hits);
    setRecipeList(response.data.hits);
    // console.log(recipeList);

    dispatch(addRecipe(recipeList));
    // setRecipeList("");
  };

  return (
    <Container>
      <HeadComponent fetchRecipe={fetchRecipe} />
      <RecipeComponent recipeList={recipeList} />
    </Container>
  );
}

export default App;
