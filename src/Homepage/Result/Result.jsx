import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Result extends Component {
  state = {
    annual: 0,
    month: 0
  };
  render() {
    return (
      <div className="result__wrap">
        <h1 className="result__title"> Ваш пассивный доход</h1>
        <div className="result__numbers-wrap">
          <div className="result__annual-wrap">
            <span className="result__annual-number">
              {`${Math.ceil(this.props.summAnnual)}$`}
            </span>
            <span className="result__annual-caption">
              {" "}
              за весь срок вложения{" "}
            </span>
          </div>

          <div className="result__month-wrap">
            <span className="result__month-number">
              {" "}
              {`${Math.ceil(this.props.summ)}$`}{" "}
            </span>
            <span className="result__month-caption"> ежимесячно </span>
          </div>
        </div>
        <button className="result__btn">Инвестировать</button>
      </div>
    );
  }
}

export default Result;
