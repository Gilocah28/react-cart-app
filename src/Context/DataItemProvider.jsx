import React, { useEffect, useState } from "react";
import DataItemContext from "./DataItemContext";
import LocalDataItem from "../Data/LocalDataItems.js";

const DataItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCart, setItemCart] = useState([]);

  useEffect(() => setCartItems(LocalDataItem), [itemCart]);
  console.log(itemCart)

  return (
    <DataItemContext.Provider value={{ cartItems, itemCart, setItemCart }}>
      {children}
    </DataItemContext.Provider>
  );
};

export default DataItemProvider;
