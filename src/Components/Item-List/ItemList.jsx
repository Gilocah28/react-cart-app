import React, { useContext } from "react";
import DataItemContext from "../../Context/DataItemContext";
import "./Style/ItemList.scss";

const ItemList = () => {
  const { cartItems } = useContext(DataItemContext);
  console.log(cartItems);

  return (
    <>
      <div className="item-list-container">
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id} className="item-container">
              <div className="cart-image-container">
                <img src={cartItem.image.desktop} alt={cartItem.category} />
              </div>
              <div className="cart-details-container">
                <p className="category">{cartItem.category}</p>
                <h2 className="name">{cartItem.name}</h2>
                <p className="price">${cartItem.price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
