import ServicesCardComponent from "../ServicesCardComponent/ServicesCardComponent";
import "./ServicesComponent.css";
import React from "react";

const ServicesComponent = ({ servicesCards }) => {
  return (
    <section className="services">
      <h2>Наші послуги</h2>
      <div className="cards">
        <div className="container cards-wrapper">
          {servicesCards.map((card, i) => (
            <ServicesCardComponent
              title={card.title}
              imgSrc={card.imgSrc}
              backText={card.backText}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
