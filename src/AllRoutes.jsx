import React from "react";
import { Routes, Route } from "react-router-dom";
import FoodList from  "../src/Foodlist/Foodlist";
import  SingleItem  from "./Foodlist/SingleItem";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FoodList />}></Route>
        <Route path="/:code" element={<SingleItem />}></Route>
      </Routes>
    </>
  );
};
export default AllRoutes
