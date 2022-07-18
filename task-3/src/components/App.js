import React, {useState} from "react";

import "./styles.css";

import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import ListComponent from "./ListComponent";
import FooterComponent from "./FooterComponent";

import LayoutContext from "./context/LayoutContext";
import CartContext from "./context/CartContext";

import Products from "./products/products.json";

function App() {

  const [layout, setLayout] = useState("main")
  const [cart, setCart] = useState(new Array(Products.length).fill(0))

  return (
    <CartContext.Provider value={{cart, setCart}}>
    <LayoutContext.Provider value={{layout, setLayout}}>
    <div className="wrapper">
      <HeaderComponent />
      { layout === "main" ? <MainComponent /> : <ListComponent /> }
      <FooterComponent />
    </div>
    </LayoutContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
