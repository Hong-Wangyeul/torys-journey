import React, { useState } from "react";
import Search from "../component/Search";
import dummyData from "./TESTTESTTEST";
import axios from "axios";
import { useDispatch } from "react-redux";
import ShopEnroll from "./ShopEnroll";
import ShopList from "../component/ShopList";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RestaurantDiv, RestaurantMainDiv } from "../style/RestaurantList";

export type Data = {
  id: number;
  picture: any;
  name: string;
  address: string;
  number: string;
  detailInfo: string;
  officeHours: string;
}; // 자식컴포넌트로 넘겨주기위해 export해 줍시다.

const Restaurant = () => {
  return (
    <RestaurantMainDiv>
      <Search />
      <Link to="/shopenroll">
        <button>식당 등록</button>
      </Link>
      <RestaurantDiv>
        {dummyData.map((el) => (
          <ShopList key={el.id} data={el} />
        ))}
      </RestaurantDiv>
    </RestaurantMainDiv>
  );
};

export default Restaurant;
