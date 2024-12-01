import React, { useContext } from "react";
import { addCart } from "../../../assets";
import DataItemContext from "../../../Context/DataItemContext";

const HandleAddToCart = ({ cartItem }) => {
  const { setItemCart, cartItems } = useContext(DataItemContext);

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
  };

  return (
    <button onClick={() => handleAddItemToCart(cartItem.id)}>
      <img src={addCart} alt="icon" />
      Add to Cart
    </button>
  );
};

export default HandleAddToCart;
