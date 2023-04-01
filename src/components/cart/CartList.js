import React, { useContext } from "react";
import { productContext } from "../../store/ContextStore";

const CartList = () => {
  const { largeProduct, removeProduct } = useContext(productContext);
  return (
    <div>
      {largeProduct.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.large}</p>

            <button onClick={() => removeProduct(item._id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
