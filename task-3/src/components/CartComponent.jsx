import React, { useContext, useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import "./styles.css";
import CartContext from "./context/CartContext";

const CartComponent = () => {

    const [ size, setSize ] = useState(0) // суммарное количество всех выбранных пользователем товаров
    // будет отображаться сверху у иконки корзины

    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        setSize(cart.reduce((prev, elem) => prev + elem, 0)) // обновляет значение size при изменении cart
    }, [cart])

    return (
    <div className="cart-container">
        <Link to="/cart">
            <button><img src="https://imgur.com/0mrcpWQ.png" alt="Cart" /></button>
            { size > 0 ? <div className="circle">{size}</div> : null}
        </Link>
    </div>
    )
}

export default CartComponent;