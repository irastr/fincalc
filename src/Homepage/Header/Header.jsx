import React from "react";

const Header = ({ activeUsd, activeUah, changeCurrency }) => {
  let btnClassUsd = activeUsd ? "ui-btn--active" : "ui-btn";
  let btnClassUah = activeUah ? "ui-btn--active" : "ui-btn";
  return (
    <div className="header">
      <div className="header__title-wrap">
        <h1 className="header__title">Рассчитайте пассивный доход</h1>
      </div>
      <div className="header__btns-wrap">
        <button
          onClick={() => changeCurrency("usd")}
          className={`header__btn header__btn--usd ${btnClassUsd}`}
        >
          usd
        </button>
        <button
          onClick={() => changeCurrency("uah")}
          className={`header__btn header__btn--usd ${btnClassUah}`}
        >
          uah
        </button>
      </div>
    </div>
  );
};

export default Header;
