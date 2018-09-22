import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Summary = ({
  currency,
  value1,
  value2,
  paymentType,
  percent,
  summAnnual,
  summ
}) => {
  return (
    <div className="summary__wrap">
      <Link to="/">
        <button className="ui-btn--active summary__btn"> Назад</button>
      </Link>
      <p className="summary__title-main">Вы выбрали:</p>
      <div className="summary__titles-wrap">
        <span className="summary__title">
          Валюта:
          {` ${currency}`}{" "}
        </span>
        <span className="summary__title">Сумма: {` ${value1}`}</span>
        <span className="summary__title">Срок: {` ${value2} месяцев`}</span>
        <span className="summary__title">
          Выплата процентов:{" "}
          {paymentType === "month" ? "ежимесячно" : "в конце срока"}
        </span>
        <span className="summary__title">
          Процентная ставка: {` ${percent} %`}
        </span>
      </div>
      <div className="result__wrap">
        <h1 className="result__title"> Ваш пассивный доход</h1>
        <div className="result__numbers-wrap">
          <div className="result__annual-wrap">
            <span className="result__annual-number">{`${Math.ceil(
              summAnnual
            )}$`}</span>
            <span className="result__annual-caption">
              {" "}
              за весь срок вложения{" "}
            </span>
          </div>

          <div className="result__month-wrap">
            <span className="result__month-number">
              {`${Math.ceil(summ)}$`}
            </span>
            <span className="result__month-caption"> ежимесячно </span>
          </div>
        </div>

        <button className="result__btn">Инвестировать</button>
      </div>
    </div>
  );
};

export default Summary;
