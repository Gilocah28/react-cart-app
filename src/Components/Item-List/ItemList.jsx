import React, { useContext } from "react";
import DataItemContext from "../../Context/DataItemContext";

const ItemList = () => {
  const { cartItems } = useContext(DataItemContext);

  return <div className="item-list-container">ItemList</div>;
};

export default ItemList;
