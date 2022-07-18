import React, { useContext } from "react";
import "./styles.css";
import Products from "./products/products.json"
import ListItemComponent from "./ListItemComponent";
import CartContext from "./context/CartContext";


const ListComponent = () => {

    const { cart, setCart } = useContext(CartContext)

    const total = Products.reduce((prev, elem) => prev + elem.price * cart[elem.id], 0)

    return (
    <div className="cart-wrapper">
        <div className="cart-title">Корзина</div>
        <div className="cart-menu">
            <div className="cart-list">
                {
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