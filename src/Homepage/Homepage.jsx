import React from "react";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";
import Result from "./Result/Result";

const Homepage = () => {
  return (
    <div className="calc-wrap">
      <Header />
      <Filters />
      <Result />
    </div>
  );
};

export default Homepage;
