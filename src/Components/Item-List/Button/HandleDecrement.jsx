import React, { useContext } from "react";
import DataItemContext from "../../../Context/DataItemContext";
import { cartDecrement } from "../../../assets";

const HandleDecrement = ({ cartItem }) => {
  const { setItemCart } = useContext(DataItemContext);

  const handleRemoveItemToCart = (id) => {
    setItemCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem && existingItem.amount > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        );
      }

      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <img
        src={cartDecrement}
        alt="icon"
        onClick={() => handleRemoveItemToCart(cartItem.id)}
      />
    </>
  );
};

export default HandleDecrement;
