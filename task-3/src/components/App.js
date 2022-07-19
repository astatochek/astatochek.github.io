import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./styles.css";

import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import ListComponent from "./ListComponent";
import FooterComponent from "./FooterComponent";

import CartContext from "./context/CartContext";

import Products from "./products/products.json";

function App() {

  const [cart, setCart] = useState(new Array(Products.length).fill(0)) // массив с количеством товаров для каждого товара из списка всех
  // нумерация происходит по индексам, которые совпадают с id каждого товара, т.е. есть есть product,
  // то cart[product.id] - количество выбранных товаров этого наименования

  return (
    <Router>
    <CartContext.Provider value={{cart, setCart}}>
    <Routes>
      <Route exact path="/" element={
        <div className="wrapper">
          <HeaderComponent />
          <MainComponent />
          <FooterComponent />
        </div>
      } />
      <Route exact path="/cart" element={
        <div className="wrapper">
          <HeaderComponent />
          <ListComponent />
          <FooterComponent />
        </div>
      } />
    </Routes>
    </CartContext.Provider>
    </Router>
  );
}

export default App;
