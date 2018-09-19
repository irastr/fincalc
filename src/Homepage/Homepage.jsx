import React from "react";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";

const Homepage = () => {
  return (
    <div className="calc-wrap">
      <Header />
      <Filters />
    </div>
  );
};

export default Homepage;
