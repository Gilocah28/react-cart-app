import React, { useEffect, useState } from "react";
import DataItemContext from "./DataItemContext";
import LocalDataItem from "../Data/LocalDataItems.js";

const DataItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCart, setItemCart] = useState([]);
  const [isContainer, setIsContainer] = useState(false);

  useEffect(() => setCartItems(LocalDataItem), []);

  return (
    <DataItemContext.Provider
      value={{ cartItems, itemCart, setItemCart, isContainer, setIsContainer }}
    >
      {children}
    </DataItemContext.Provider>
  );
};

export default DataItemProvider;
