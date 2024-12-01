import React, { useContext } from "react";
import { removeIcon } from "../../assets";
import DataItemContext from "../../Context/DataItemContext";

const ListCart = ({ item }) => {
  const { itemCart, setItemCart } = useContext(DataItemContext);

  const handleRemoveInCart = (id) => {
    const cart = itemCart.filter((cartItem) => cartItem.id !== id);
    setItemCart((prev) => (prev = cart));
  };

  return (
    <div className="item-cart">
      <div className="item-name">
        <h2>{item.name}</h2>
        <div className="count-price">
          <p className="amount">{item.amount}x</p>
          <p className="price">@ {item.price.toFixed(2)}</p>
          <p className="sub-total">${(item.amount * item.price).toFixed(2)}</p>
        </div>
      </div>

      <button onClick={() => handleRemoveInCart(item.id)}>
        <img src={removeIcon} alt={item.id} />
      </button>
    </div>
  );
};

export default ListCart;
