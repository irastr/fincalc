import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title-wrap">
        <h1 className="header__title">Рассчитайте пассивный доход</h1>
      </div>
      <div className="header__btns-wrap">
        <button className=" header__btn header__btn-usd ui-btn">usd</button>
        <button className=" header__btn header__btn-uah ui-btn">uah</button>
      </div>
    </div>
  );
};

export default Header;
