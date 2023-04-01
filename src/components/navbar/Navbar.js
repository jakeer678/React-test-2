import React from "react";
import "./Navbar.css";
import CartItem from "../cart/CartItem";

const Navbar = () => {
  return (
    <div>
      <ul className="header">
        <CartItem />
      </ul>
    </div>
  );
};

export default Navbar;
