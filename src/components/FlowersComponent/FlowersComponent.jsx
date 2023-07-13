import Slider from "react-slick";
import "./FlowersComponent.css";
import React from "react";
import FlowersItemComponent from "../FlowersItemComponent/FlowersItemComponent";

const settings = {
  className: "slider",
  slidesPerRow: 3,
  centerMode: true,
};

const FlowersComponent = ({ shopItems }) => {
  return (
    <section className="flowers">
      <h2>Букети</h2>
      <Slider {...settings}>
        {/* {shopItems.map((item, i) => (
          <FlowersItemComponent
            title={item.title}
            imgSrc={item.imgSrc}
            price={item.price}
            key={i}
          />
        ))} */}
				<FlowersItemComponent
          title={shopItems[0].title}
          imgSrc={shopItems[0].imgSrc}
          price={shopItems[0].price}
        />
				<FlowersItemComponent
          title={shopItems[0].title}
          imgSrc={shopItems[0].imgSrc}
          price={shopItems[0].price}
        />
				<FlowersItemComponent
          title={shopItems[0].title}
          imgSrc={shopItems[0].imgSrc}
          price={shopItems[0].price}
        />
				
      </Slider>
      <div className="container flowers-container">
        {" "}
        {/* <FlowersItemComponent
          title={shopItems[0].title}
          imgSrc={shopItems[0].imgSrc}
          price={shopItems[0].price}
        /> */}
      </div>
    </section>
  );
};

export default FlowersComponent;
