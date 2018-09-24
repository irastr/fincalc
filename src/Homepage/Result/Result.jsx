import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

const Result = ({ summ, summAnnual, currency }) => {
  return (
    <div className="result__wrap">
      <h1 className="result__title"> Ваш пассивный доход</h1>
      <div className="result__numbers-wrap">
        <div className="result__annual-wrap">
          <span className="result__annual-number">
            {Math.ceil(summAnnual)}

            {currency === "USD" ? "$" : "грн."}
          </span>
          <span className="result__annual-caption">
            {" "}
            за весь срок вложения{" "}
          </span>
        </div>

        <div className="result__month-wrap">
          <span className="result__month-number">
            {" "}
            {Math.ceil(summ)}
            {currency === "USD" ? "$" : "грн."}
          </span>
          <span className="result__month-caption"> ежемесячно </span>
        </div>
      </div>

      <Link to="/summary">
        <button className="result__btn">Инвестировать</button>
      </Link>
    </div>
  );
};

export default Result;
