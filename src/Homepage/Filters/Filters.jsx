import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Filters = ({
  value1,
  changeAmount,
  value2,
  changeTime,
  changePaymentType,
  percent,
  activeAnnual,
  activeMonth,
  currency
}) => {
  let btnClassAnnual = activeAnnual ? "ui-btn--active" : "ui-btn";
  let btnClassMonth = activeMonth ? "ui-btn--active" : "ui-btn";

  return (
    <React.Fragment>
      <div className="filters-wrap">
        <div className="summ-wrap">
          {" "}
          <span className="filters__title">Сумма</span>
          <div className="summ__range-wrap">
            <InputRange
              maxValue={100000}
              minValue={1000}
              value={value1}
              onChange={value => changeAmount(value)}
              formatLabel={value =>
                `${value} ${currency === "USD" ? "$" : "грн."}`
              }
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
              value={value2}
              onChange={value2 => changeTime(value2)}
              formatLabel={value2 => `${value2} мес`}
            />
          </div>
        </div>

        <div className="payments-wrap">
          {" "}
          <span className="filters__title">Выплата процентов</span>
          <div className="payments__btns-wrap">
            <button
              onClick={() => changePaymentType("month")}
              className={`${btnClassAnnual} payments__btn `}
            >
              ежимесячно
            </button>
            <button
              onClick={() => changePaymentType("annual")}
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
            <span className="percent__quantity">{`${percent}%`}</span>
            <span className="percent__caption">зависит от срока и валюты</span>
          </div>
        </div>

        {/* <button onClick={() => this.getPercent()}>Get summ</button>
          <p> {`${Math.ceil(this.state.summ)}$`}</p>
          <p> {`${Math.ceil(this.state.summAnual)}$`}</p> */}
      </div>
    </React.Fragment>
  );
};

export default Filters;
