import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchForm, SearchFormInput, SearchDiv } from "../style/Search";

import { ShopEnrollLink, MapSearch } from "../style/RestaurantList";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  useEffect(() => {
    dispatch({ type: "search", payload: searchTerm });
  });

  return (
    <SearchDiv>
      <SearchForm>
        <SearchFormInput
          type="search"
          placeholder="지역명이나 상호명을 입력하세요"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {/* <SearchFormSubmit type="submit" value="검색" onClick={submitButton} /> */}
        <MapSearch to="/here">내주변 찾기</MapSearch>
        <ShopEnrollLink to="/shopenroll">식당 등록</ShopEnrollLink>
      </SearchForm>
    </SearchDiv>
  );
};

export default SearchBar;

// import React from "react";
// import { SearchForm, SearchFormInput, SearchFormSubmit } from "../style/Search";

// const SearchBar = () => {
//   return (
//     <SearchForm>
//       <SearchFormInput type="search" />
//       <SearchFormSubmit type="submit" value="검색" />
//     </SearchForm>
//   );
// };

// export default SearchBar;
