import React, { Component } from "react";

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
            <span className="result__annual-number"> {this.state.annual} </span>
            <span className="result__annual-caption">
              {" "}
              за весь срок вложения{" "}
            </span>
          </div>

          <div className="result__month-wrap">
            <span className="result__month-number"> {this.state.month} </span>
            <span className="result__month-caption"> ежимесячно </span>
          </div>
        </div>

        <button className="result__btn">Инвестировать</button>
      </div>
    );
  }
}

export default Result;