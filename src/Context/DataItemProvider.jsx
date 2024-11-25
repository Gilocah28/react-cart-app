import React, { useEffect, useState } from "react";
import DataItemContext from "./DataItemContext";
import LocalDataItem from "../Data/LocalDataItems.js";

const DataItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => setCartItems(LocalDataItem), []);

  return (
    <DataItemContext.Provider value={{ cartItems }}>
      {children}
    </DataItemContext.Provider>
  );
};

export default DataItemProvider;
