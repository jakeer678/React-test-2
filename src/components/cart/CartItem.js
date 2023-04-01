import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { productContext } from "../../store/ContextStore";
import "./Cart.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {  Dialog } from "@mui/material";
import CartList from "./CartList";


const CartItem = () => {
  const { open, largeProduct, handleClose, handleClickOpen } =
    useContext(productContext);
  const quantity = largeProduct?.length 
  console.log(quantity,"ppppp")
  const total = largeProduct?.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  return (
    <>
      <div className="cart">
        <button className="cart_container" onClick={handleClickOpen}>
          <div className="cart_text">Cart </div>
          <div>
            <AddShoppingCartIcon />
          </div>
          {quantity}
        </button>
      </div>
      <div>
        <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
          <div className="cartlist">
            <div className="button_close">
              <h5>Cart Products</h5>
              <button onClick={handleClose}>
                <HighlightOffIcon />
              </button>
            </div>
            <div>
              <CartList />
            </div>

            <div className="total">Tota amount $ {total}</div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default CartItem;
