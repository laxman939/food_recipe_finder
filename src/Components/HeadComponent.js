import React, { useState } from "react";
import styled from "styled-components";

import SearchIcon from "@mui/icons-material/Search";
import RestaurantMenuSharpIcon from "@mui/icons-material/RestaurantMenuSharp";

const Head = styled.div`
  color: white;
  background-color: #865019d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  padding: 18px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #925e1055;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Alfa Slab One", cursive;
  color: #4c0629;
  font-weight: 900;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 18px;
  border-radius: 20px;
  width: 50%;
  background-color: #eeddc3;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin: 0px 18px;
  padding: 14px opx;
  font-size: 16px;
  color: #865019d9;
  background-color: #eeddc3;
`;

const HeadComponent = (props) => {
  const { fetchRecipe } = props;

  const [value, setValue] = useState("");
  const [timeOutId, setTimeOutId] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);

    //To Limit Debouncing effect(Making more API calls)
    clearTimeout(timeOutId);
    const timeout = setTimeout(() => fetchRecipe(value), 500);
    // console.log(timeout);
    setTimeOutId(timeout);
  };

  return (
    <Head>
      <AppName>
        Recipe Finder&nbsp;
        <RestaurantMenuSharpIcon />
      </AppName>
      <SearchBox>
        <SearchIcon color="action" />
        <SearchInput
          placeholder="Search Recipe here..."
          onChange={handleChange}
          value={value}
        />
      </SearchBox>
    </Head>
  );
};
export default HeadComponent;
