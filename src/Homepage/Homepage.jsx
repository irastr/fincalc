import React from "react";

import Filters from "./Filters/Filters";
import Result from "./Result/Result";
import Header from "./Header/Header";

const Homepage = ({
  changeCurrency,
  activeUsd,
  activeUah,
  value1,
  changeAmount,
  value2,
  changeTime,
  changePaymentType,
  percent,
  activeAnnual,
  activeMonth,
  summAnnual,
  summ,
  currency
}) => {
  return (
    <div className="calc-wrap">
      <Header
        changeCurrency={changeCurrency}
        activeUsd={activeUsd}
        activeUah={activeUah}
      />
      <Filters
        value1={value1}
        changeAmount={changeAmount}
        value2={value2}
        changeTime={changeTime}
        changePaymentType={changePaymentType}
        percent={percent}
        activeAnnual={activeAnnual}
        activeMonth={activeMonth}
        currency={currency}
      />
      <Result summAnnual={summAnnual} summ={summ} currency={currency} />
    </div>
  );
};

export default Homepage;
