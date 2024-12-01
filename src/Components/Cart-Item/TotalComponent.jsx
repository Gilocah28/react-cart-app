import React, { useContext } from "react";
import DataItemContext from "../../Context/DataItemContext";
import { carbonIcon } from "../../assets";

const TotalComponent = () => {
  const { itemCart } = useContext(DataItemContext);

  const totalPrice = itemCart.reduce((ack, item) => {
    return ack + item.price * item.amount;
  }, 0);

  return (
    <div className="total-container">
      <div className="order-total">
        <p>Order total</p>
        <p className="item-total">${totalPrice.toFixed(2)}</p>
      </div>

      <div className="order-confirm">
        <div className="carbon">
          <img src={carbonIcon} alt="icon" />
          <p>
            This is a <span>carbon-neutral</span> delivery
          </p>
        </div>

        <button>Confirm Order</button>
      </div>
    </div>
  );
};

export default TotalComponent;
