import React, { useContext } from "react";
import { cartIncrement } from "../../../assets";
import DataItemContext from "../../../Context/DataItemContext";

const HandleIncrement = ({ cartItem }) => {
  const { setItemCart } = useContext(DataItemContext);

  const handleIncrementItem = (id) => {
    setItemCart((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
    });
  };

  return (
    <>
      <img
        src={cartIncrement}
        alt="name"
        onClick={() => handleIncrementItem(cartItem.id)}
      />
    </>
  );
};

export default HandleIncrement;
