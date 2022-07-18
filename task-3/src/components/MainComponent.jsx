import React from "react";
import "./styles.css";
import ItemComponent from "./ItemComponent";
import Products from "./products/products.json" // список всех товаров с необходимыми данными (наименование, цена, иллюстрация, категория)
// id в products.json начинается с 0 и увеличивется на 1, чтобы использовать его в качестве индекса для cart


const MainComponent = () => {

    return (
    <div className="main">
        <div className="gray-text">Наушники</div>
        <div className="item-list">
        {
            // filter оставляет только товары категории "с проводами"
            // map позволяет отрендерить ListItemComponent с props-ами из данных в products.json
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
            // filter оставляет только товары категории "без проводов"
            // map позволяет отрендерить ListItemComponent с props-ами из данных в products.json
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