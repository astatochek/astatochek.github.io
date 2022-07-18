import React from "react";
import "./styles.css";
import ItemComponent from "./ItemComponent";
import Products from "./products/products.json"


const MainComponent = () => {

    return (
    <div className="main">
        <div className="gray-text">Наушники</div>
        <div className="item-list">
        {
            Products.filter(product => product.wireless === "False").map( product => {
                return (
                    <ItemComponent key={product.id} id={product.id} name={product.name} price={product.price} rating={product.rating} url={product.url}/>
                )
            })
        }
        </div>
        <div className="gray-text">Беспроводные наушники</div>
        <div className="item-list">
        {
            Products.filter(product => product.wireless === "True").map( product => {
                return (
                    <ItemComponent key={product.id} id={product.id} name={product.name} price={product.price} rating={product.rating} url={product.url}/>
                )
            })
        }
        </div>
    </div>
    )
}

export default MainComponent;