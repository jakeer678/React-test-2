import React, { useContext } from "react";
import { productContext } from "../../store/ContextStore";

const CartList = () => {
  const { largeProduct } = useContext(productContext);
  return (
    <div>
      {largeProduct.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.large}</p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
