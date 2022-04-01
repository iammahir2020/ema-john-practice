import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-nav">
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <nav className="header-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/reviewOrder">Review Order</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
