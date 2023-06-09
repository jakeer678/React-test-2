import axios from "axios";
import { productContext } from "./ContextStore";

import React, { useEffect, useState } from "react";

const ContextProvider = (props) => {
  const [productlist, setProductList] = useState([]);
  const [open, setOpen] = useState(false);
  const [largeProduct, setlargeProduct] = useState(productlist);
  // const [mediumProduct, setMediumProduct] = useState(productlist);
  // const [smallProduct, setSmallProduct] = useState(productlist);

  console.log(productlist);
  console.log(largeProduct, "kkkkk");
  // console.log(mediumProduct, "ppppppp");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setProduct = async () => {
    const response = await axios.get(
      "https://crudcrud.com/api/00910becead446acb16711137960bff3/cart"
    );
    console.log(response.data);
    setlargeProduct(response.data);
  };

  const addTocart = async (productDetail) => {
    const response = await axios.post(
      "https://crudcrud.com/api/00910becead446acb16711137960bff3/cart",
      productDetail
    );

    console.log(response.data, "fffff");
    setlargeProduct([...largeProduct, productDetail]);
  };

  const removeProduct = async (_id) => {
    const response = await axios.delete(
      `https://crudcrud.com/api/00910becead446acb16711137960bff3/cart/${_id}`
    );
    console.log(response.data);
    setProduct();
  };

  const addProductList = (item) => {
    setProductList([...productlist, item]);
  };

  // const addTocart = (item) => {
  //   const updated = [...largeProduct, item];
  //   setlargeProduct(updated);
  // };

  useEffect(() => {
    setProduct();
  }, [largeProduct]);

  const contextValue = {
    productlist: productlist,
    largeProduct: largeProduct,
    handleClose: handleClose,
    addTocart: addTocart,
    open: open,
    removeProduct: removeProduct,
    addProductList: addProductList,
    handleClickOpen: handleClickOpen,
    // mediumProduct: mediumProduct,
    // smallProduct: smallProduct,
    // mediumSize: mediumSize,
    // smallSize: smallSize,
  };

  return (
    <productContext.Provider value={contextValue}>
      {props.children}
    </productContext.Provider>
  );
};

export default ContextProvider;
