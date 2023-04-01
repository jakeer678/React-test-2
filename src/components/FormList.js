import React, { useContext } from "react";
import { productContext } from "../store/ContextStore";
import "./FormList.css";

const FormList = () => {
  const { productlist, addTocart  } = useContext(productContext);

  return (
    <div>
      {productlist?.map((item) => {
        return (
          <div key={item.id} className="listItems">
            <li className="name">{item.name}</li>
            <li className="description">{item.description}</li>
            <li className="price">{item.price}</li>
            <div className="sizeList">
              <button onClick={() => addTocart(item)}>
                <li className="large">Buy Large-({item.large})</li>
              </button>
              <button onClick={() => addTocart(item)}>
                <li className="medium">Buy medium-({item.medium})</li>
              </button>
              <button onClick={() => addTocart(item)}>
                <li className="small">Buy small-({item.small})</li>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormList;
