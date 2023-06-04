import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./App.module.scss";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [productCount, setProductCount] = useState(50); // Initial product count
  const [pay, setPay] = useState(0);

  const remove = () => {
    setCartItems(0);
    setPay(0);
  };

  const increment = () => {
    if (productCount > 0) {
      setCartItems(cartItems + 1);
      setPay(pay + 125);
      setProductCount(productCount - 1); // Decrement product count when adding to cart
    }
  };

  const decrement = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
      setPay(pay - 125);
      setProductCount(productCount + 1); // Increment product count when removing from cart
    }
  };

  return (
    <div className="App">
      <Nav remove={remove} cartItems={cartItems} pay={pay} />
      <Main increment={increment} decrement={decrement} cartItems={cartItems} productCount={productCount} />
    </div>
  );
}

export default App;
