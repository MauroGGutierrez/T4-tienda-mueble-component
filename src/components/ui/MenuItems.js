import React from "react";
import "./MenuItems.css";

const MenuItems = ({ items }) => {
  return (
    <div className="contenedor-navegacion">
      <nav className="navegacion contenedor">
        {items.map((item) => (
          <a href={item.link} key={item.link}>{item.name}</a>
        ))}
      </nav>
    </div>
  );
};

export default MenuItems;
