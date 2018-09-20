import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { data } from "../../db";

class Filters extends Component {
  state = {
    value: 50000,
    value2: 19,
    percent: 18,
    currency: "USD",
    paymentType: "month",
    summ: 750,
    summAnual: 14250,
    activeAnnual: true,
    activeMonth: false,
    activeUsd: true,
    activeUah: false
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
      let summAnnualNew = summNew * this.state.value2;
      this.setState(prevState => {
        return {
          summ: summNew,
          summAnual: summAnnualNew
        };
      });
    });
  };

  changeTime(value2) {
    this.setState({ value2: value2 });
    this.getPercent();
  }

  changeAmount(value) {
    this.setState({ value: value });
    this.getPercent();
  }

  changePaymentType = type => {
    if (type === "annual") {
      this.setState(
        {
          paymentType: "annual",
          activeAnnual: !this.state.activeAnnual,
          activeMonth: !this.state.activeMonth
        },
        () => {
          this.getPercent();
        }
      );
    } else if (type === "month") {
      this.setState(
        {
          paymentType: "month",
          activeMonth: !this.state.activeMonth,
          activeAnnual: !this.state.activeAnnual
        },
        () => {
          this.getPercent();
        }
      );
      this.getPercent();
    }
  };

  changeCurrency = currency => {
    if (currency === "usd") {
      this.setState(
        {
          currency: "USD",
          activeUsd: !this.state.activeUsd,
          activeUah: !this.state.activeUah
        },
        () => {
          this.getPercent();
        }
      );
    } else if (currency === "uah") {
      this.setState(
        {
          currency: "UAH",
          activeUah: !this.state.activeUah,
          activeUsd: !this.state.activeUsd
        },
        () => {
          this.getPercent();
        }
      );
      this.getPercent();
    }
  };

  render() {
    let btnClassAnnual = this.state.activeAnnual ? "ui-btn--active" : "ui-btn";
    let btnClassMonth = this.state.activeMonth ? "ui-btn--active" : "ui-btn";
    let btnClassUsd = this.state.activeUsd ? "ui-btn--active" : "ui-btn";
    let btnClassUah = this.state.activeUah ? "ui-btn--active" : "ui-btn";

    return (
      <React.Fragment>
        <div className="header">
          <div className="header__title-wrap">
            <h1 className="header__title">Рассчитайте пассивный доход</h1>
          </div>
          <div className="header__btns-wrap">
            <button
              onClick={() => this.changeCurrency("usd")}
              className={`header__btn header__btn--usd ${btnClassUsd}`}
            >
              usd
            </button>
            <button
              onClick={() => this.changeCurrency("uah")}
              className={`header__btn header__btn--usd ${btnClassUah}`}
            >
              uah
            </button>
          </div>
        </div>
        <div className="filters-wrap">
          <div className="summ-wrap">
            {" "}
            <span className="filters__title">Сумма</span>
            <div className="summ__range-wrap">
              <InputRange
                maxValue={100000}
                minValue={1000}
                value={this.state.value}
                // onChange={value => this.setState({ value: value })}
                onChange={value => this.changeAmount(value)}
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
                // onChange={value2 => this.setState({ value2: value2 })}
                onChange={value2 => this.changeTime(value2)}
                // onChange={this.onValueChange(value2)}
                formatLabel={value2 => `${value2} мес`}
              />
            </div>
          </div>

          <div className="payments-wrap">
            {" "}
            <span className="filters__title">Выплата процентов</span>
            <div className="payments__btns-wrap">
              <button
                onClick={() => this.changePaymentType("month")}
                className={`${btnClassAnnual} payments__btn `}
              >
                ежимесячно
              </button>
              <button
                onClick={() => this.changePaymentType("annual")}
                // className=" payments__btn ui-btn"
                className={`${btnClassMonth} payments__btn `}
              >
                в конце срока
              </button>
            </div>
          </div>

          <div className="percent-wrap">
            {" "}
            <span className="filters__title">Процентная ставка</span>
            <div className="percent__quantity-wrap">
              <span className="percent__quantity">{`${
                this.state.percent
              }%`}</span>
              <span className="percent__caption">
                зависит от срока и валюты
              </span>
            </div>
          </div>

          {/* <button onClick={() => this.getPercent()}>Get summ</button>
          <p> {`${Math.ceil(this.state.summ)}$`}</p>
          <p> {`${Math.ceil(this.state.summAnual)}$`}</p> */}
        </div>

        <div className="result__wrap">
          <h1 className="result__title"> Ваш пассивный доход</h1>
          <div className="result__numbers-wrap">
            <div className="result__annual-wrap">
              <span className="result__annual-number">
                {" "}
                {`${Math.ceil(this.state.summAnual)}$`}{" "}
              </span>
              <span className="result__annual-caption">
                {" "}
                за весь срок вложения{" "}
              </span>
            </div>

            <div className="result__month-wrap">
              <span className="result__month-number">
                {" "}
                {`${Math.ceil(this.state.summ)}$`}{" "}
              </span>
              <span className="result__month-caption"> ежимесячно </span>
            </div>
          </div>

          <button className="result__btn">Инвестировать</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Filters;
