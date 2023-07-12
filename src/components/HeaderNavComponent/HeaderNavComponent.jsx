import "./HeaderNavComponent.css";
import React, { useState } from "react";

const HeaderNavComponent = ({ navItems }) => {
  const [activeItem, setActiveItem] = useState(0);

  const onClickItem = (id) => {
    setActiveItem(id);
  };
  return (
    <nav className="nav">
      <ul>
        {navItems.map((item, i) => (
          <li
            onClick={() => onClickItem(i)}
            key={i}
            className={activeItem === i ? "nav__item-active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavComponent;
