import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { data } from "../../db";

class Filters extends Component {
  state = {
    value: 50000,
    value2: 4,
    percent: 0,
    currency: "USD",
    paymentType: "month",
    summ: 0
  };

  getPercent = () => {
    let percentNew;
    data.forEach(item => {
      if (
        item.currency === this.state.currency &&
        item.term.indexOf(this.state.value2) !== -1
      ) {
        if (this.state.paymentType === "month") {
          percentNew = item.month;
        } else if (this.state.paymentType === "annual") {
          percentNew = item.annual;
        }
      }
    });

    this.setState({ percent: percentNew }, () => {
      let summNew = ((this.state.percent / 100) * this.state.value) / 12;
      this.setState(prevState => {
        return { summ: summNew };
      });
    });
  };

  render() {
    return (
      <div className="filters-wrap">
        <div className="summ-wrap">
          {" "}
          <span className="filters__title">Сумма</span>
          <div className="summ__range-wrap">
            <InputRange
              maxValue={100000}
              minValue={1000}
              value={this.state.value}
              onChange={value => this.setState({ value: value })}
              formatLabel={value => `${value} $`}
            />
          </div>
        </div>
        <div className="time-wrap">
          {" "}
          <span className="filters__title">Срок</span>
          <div className="time__range-wrap">
            <InputRange
              maxValue={36}
              minValue={3}
              value={this.state.value2}
              onChange={value2 => this.setState({ value2: value2 })}
              // onChange={() => this.change()}
              // onChange={this.onValueChange(value2)}
              formatLabel={value2 => `${value2} мес`}
            />
          </div>
        </div>

        <div className="payments-wrap">
          {" "}
          <span className="filters__title">Выплата процентов</span>
          <div className="payments__btns-wrap">
            <button className=" payments__btn ui-btn">ежимесячно</button>
            <button className=" payments__btn ui-btn">в конце срока</button>
          </div>
        </div>

        <div className="percent-wrap">
          {" "}
          <span className="filters__title">Процентная ставка</span>
          <div className="percent__quantity-wrap">
            <span className="percent__quantity">{`${
              this.state.percent
            }%`}</span>
            <span className="percent__caption">зависит от срока и валюты</span>
          </div>
        </div>

        <button onClick={() => this.getPercent()}>Get summ</button>
        <p> {`${this.state.summ}$`}</p>
      </div>
    );
  }
}

export default Filters;
