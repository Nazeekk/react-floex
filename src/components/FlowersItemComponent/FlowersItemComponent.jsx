import "./FlowersItemComponent.css";
import React from "react";

const FlowersItemComponent = ({ title, imgSrc, price }) => {
  return (
    <div className="flowers__item">
      <div className="flowers__item-content">
        <div
          className="flowers-image"
          style={{ backgroundImage: `url(/images/${imgSrc}.png)` }}
        ></div>
        <p>{title}</p>
        <div className="flowers-bottom">
          <span className="flowers-price">{price} грн</span>
          <a href="#">
            <img
              src="/images/shopcart.svg"
              alt="shopcart.svg"
              className="shopcart"
            />
          </a>
        </div>
      </div>
      {/* <img src={imgSrc} alt={title} className="flowers-image" /> */}
    </div>
  );
};

export default FlowersItemComponent;
