import React, { useContext, useEffect } from "react";
import { addCart, cartIncrement, cartDecrement } from "../../assets";

import DataItemContext from "../../Context/DataItemContext";

const HandleButton = ({ cartItem }) => {
  const { itemCart, setItemCart, cartItems } = useContext(DataItemContext);

  const handleAddItemToCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setItemCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        return prev.map((item) => {
          item.id === id ? { ...item, amount: item.amount + 1 } : item;
        });
      }

      return [...prev, { ...item, amount: 1 }];
    });

    console.log(itemCart);
  };

  const handleIncrementItem = (id) => {
    setItemCart((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
    });

    console.log(itemCart);
  };

  const handleRemoveItemToCart = (id) => {};

  const isItemInCart = itemCart.some((item) => item.id === cartItem.id);
  const itemQuantity =
    itemCart.find((item) => item.id === cartItem.id)?.amount || 0;

  return (
    <div className="btn-cart">
      {!isItemInCart ? (
        <button onClick={() => handleAddItemToCart(cartItem.id)}>
          <img src={addCart} alt="icon" />
          Add to Cart
        </button>
      ) : (
        <button className="cartAddDelete">
          <img src={cartDecrement} alt="icon" />
          {itemQuantity}
          <img
            src={cartIncrement}
            alt="name"
            onClick={() => handleIncrementItem(cartItem.id)}
          />
        </button>
      )}
    </div>
  );
};

export default HandleButton;
