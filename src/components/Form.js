import React, { useContext, useRef } from "react";
import "./Form.css";
import { productContext } from "../store/ContextStore";
import FormList from "./FormList";

const Form = () => {
  const { addProductList } = useContext(productContext);
  const inputNameRef = useRef();
  const inputDescriptionRef = useRef();
  const inputPriceRef = useRef();
  const inputLarge = useRef();
  const inputMedium = useRef();
  const inputSmall = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const productDetail = {
      id: Math.random() * 5,
      name: inputNameRef.current.value,
      description: inputDescriptionRef.current.value,
      price: inputPriceRef.current.value,
      large: inputLarge.current.value,
      medium: inputMedium.current.value,
      small: inputSmall.current.value,
    };
    productDetail.price = parseInt(productDetail.price)
    productDetail.large = parseInt(productDetail.large)
    productDetail.medium = parseInt(productDetail.medium)
    productDetail.small = parseInt(productDetail.small)
    
    addProductList(productDetail);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="container">
          <div>
            <label>Shoe Name</label>
            <input type="text" required ref={inputNameRef} />
          </div>
          <div>
            <label>Shoe Description</label>
            <input type="text" required ref={inputDescriptionRef} />
          </div>
          <div className="shoePrice">
            <label>Shoe Price</label>
            <input type="number" min='1' id="quantity" name="quantity" required ref={inputPriceRef} />
          </div>

          <div className="sizes">
            Quantity Availables
            <div>
              <label>L</label>
              <input type="number" ref={inputLarge} required />
            </div>
            <div>
              <label>M</label>
              <input type="number"  ref={inputMedium} required />
            </div>
            <div>
              <label>S</label>
              <input type="number" ref={inputSmall} required />
            </div>
            <div>
              <button>Add Product</button>
            </div>
          </div>
        </div>
      </form>
      <FormList />
    </>
  );
};

export default Form;
