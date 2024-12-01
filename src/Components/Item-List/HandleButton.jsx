import React, { useContext } from "react";
import { cartIncrement, cartDecrement } from "../../assets";

import DataItemContext from "../../Context/DataItemContext";
import HandleAddToCart from "./Button/HandleAddToCart";
import HandleIncrement from "./Button/HandleIncrement";
import HandleDecrement from "./Button/HandleDecrement";

const HandleButton = ({ cartItem }) => {
  const { itemCart } = useContext(DataItemContext);

  const isItemInCart = itemCart.some((item) => item.id === cartItem.id);
  const itemQuantity =
    itemCart.find((item) => item.id === cartItem.id)?.amount || 0;

  return (
    <div className="btn-cart">
      {!isItemInCart ? (
        <HandleAddToCart cartItem={cartItem} />
      ) : (
        <button className="cartAddDelete">
          <HandleDecrement cartItem={cartItem} />
          {itemQuantity}
          <HandleIncrement cartItem={cartItem} />
        </button>
      )}
    </div>
  );
};

export default HandleButton;
