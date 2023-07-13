import HeaderNavComponent from "../HeaderNavComponent/HeaderNavComponent";
import "./HeaderComponent.css";
import React from "react";

const navItems = ["Головна", "Букети", "Про нас", "Контакти"];

const HeaderComponent = () => {
  return (
    <header>
      <div className="header__inner">
        <div className="container header__inner-wrapper">
          <div className="logo">
            <img src="images/logo.svg" alt="" />
          </div>
          <HeaderNavComponent navItems={navItems} />
        </div>
      </div>
      <div className="header__content">
        <div className="container">
          <div className="header__content-wrapper">
            <h3>Не знаєте, який букет обрати?</h3>
            <p>
              Отримайте професійну консультацію з флористом від FloEx та
              знайдіть ідеальну квіткову комбінацію, що вразить вашого
              отримувача!
            </p>
            <button>Отримати</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
