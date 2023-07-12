import "./ServicesCardComponent.css";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";

const ServicesCardComponent = ({ title, imgSrc, backText }) => {
  const [isFlipped, setFlipped] = useState(false);

  const onClickCard = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card" onClick={onClickCard}>
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
      </div>

      <div className="card back-card" onClick={onClickCard}>
        {backText}
      </div>
    </ReactCardFlip>
  );
};

export default ServicesCardComponent;
