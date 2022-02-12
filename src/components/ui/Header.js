import React from "react";
import MenuItems from "./MenuItems";
import { menus } from "../../model/menuModel.js"
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-header">
        <h1 className="nombre-sitio text.center">Tienda <span>Mueble</span></h1>
        <MenuItems items={menus}  />
        <div className="hero"></div>
    </div>
  );
};

export default Header;
