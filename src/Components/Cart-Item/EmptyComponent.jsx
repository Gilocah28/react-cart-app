import React from "react";
import { emptyImg } from "../../assets";

const EmptyComponent = () => {
  return (
    <div className="empty-container">
      <img src={emptyImg} alt="image" />
      <p>Your added items will appear here</p>
    </div>
  );
};

export default EmptyComponent;
