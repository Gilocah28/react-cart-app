import React, { useContext } from "react";
import DataItemContext from "../../Context/DataItemContext";
import "./Style/cartItems.scss";

import ListCart from "./ListCart";
import EmptyComponent from "./EmptyComponent";
import TotalComponent from "./TotalComponent";

const CartItems = () => {
  const { itemCart } = useContext(DataItemContext);
  const isEmptyCart = !itemCart || itemCart.length === 0;
  const itemLength = itemCart.reduce((ack, item) => ack + item.amount, 0);

  return (
    <div className="cart-item-container">
      <div className="container-item">
        <h2 className="title">Your Cart ({itemLength})</h2>

        <div className="list-container">
          {isEmptyCart ? (
            <EmptyComponent />
          ) : (
            <>
              {itemCart.map((item) => {
                return <ListCart item={item} key={item.id} />;
              })}

              <TotalComponent />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
