import React from "react";
import ItemList from "./Components/Item-List/ItemList";
import CartItems from "./Components/Cart-Item/CartItems";
import "./Style/App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="main-container">
        <ItemList />
        
        <CartItems />
      </div>
    </div>
  );
};

export default App;
