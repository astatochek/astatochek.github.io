import React, { useContext } from "react";
import "./styles.css";
import Products from "./products/products.json"
import ListItemComponent from "./ListItemComponent";
import CartContext from "./context/CartContext";


const ListComponent = () => {

    const { cart, setCart } = useContext(CartContext)

    const total = Products.reduce((prev, elem) => prev + elem.price * cart[elem.id], 0) // суммарная стоимость всех выбранных товаров с учетом из количества
    // не изпользутесся useState и useEffect, так как при изменении cart будет происходить ре-рендер
    // всего ListComponent-а и так (насколько я понимаю ¯\_(ツ)_/¯)

    return (
    <div className="cart-wrapper">
        <div className="cart-title">Корзина</div>
        <div className="cart-menu">
            <div className="cart-list">
                {
                    // filter оставляет только те элементы, которые хотя бы раз были выбраны
                    // map позволяет отрендерить ListItemComponent с props-ами из данных в products.json
                    Products.filter(product => cart[product.id] > 0).map( product => {
                        return (
                            <ListItemComponent key={product.id} id={product.id} name={product.name} price={product.price} url={product.url}/>
                        )
                    })
                }
            </div>
            <div className="cart-total">
                <div className="total">
                    <div>ИТОГО</div>
                    <div>₽ {total}</div>
                </div>
                <div className="paperwork">Перейти к оформлению</div>
            </div>
        </div>
    </div>
    )
}

export default ListComponent;