import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import LayoutContext from "./context/LayoutContext";
import CartContext from "./context/CartContext";

const CartComponent = () => {

    const [ size, setSize ] = useState(0) // суммарное количество всех выбранных пользователем товаров
    // будет отображаться сверху у иконки корзины

    const { layout, setLayout} = useContext(LayoutContext)
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        setSize(cart.reduce((prev, elem) => prev + elem, 0)) // обновляет значение size при изменении cart
    }, [cart])

    return (
    <div className="cart-container">
        <button onClick={() => {
            setLayout("cart")
        }}><img src="https://imgur.com/0mrcpWQ.png" alt="Cart" /></button>
        { size > 0 ? <div className="circle">{size}</div> : null}
    </div>
    )
}

export default CartComponent;