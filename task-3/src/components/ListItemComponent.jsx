import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import CartContext from "./context/CartContext";


const ListItemComponent = (props) => {

    const { cart, setCart } = useContext(CartContext)

    const id = props.id // product.id
    const name = props.name // product.name
    const price = props.price // product.price
    const url = props.url // product.url

    const amount = cart[id] // количество элементов в корзине с выбранным ID

    /**
     * Добавляет или убавляет на 1 количество товара с выбранным ID в корзине 
     * @param {int} itemID 0 <= itemID < Products.length (см. ./products/products.json)
     * @param {int} val +1 / -1
     */
    const ChangeAmount = (itemID, val) => {
        setCart(prev => {
            let next = [...prev]
            next[itemID] += val
            return [...next]
        })
    }

    /**
     * Убирает товар из корзины, выставляя 0 в соответствующей ячейке cart
     * @param {int} itemID 0 <= itemID < Products.length (см. ./products/products.json)
     */
    const setToZero = (itemID) => {
        setCart(prev => {
            let next = [...prev]
            next[itemID] = 0
            return [...next]
        })
    }

    return (
    <div className="cart-item">
        <div className="display">
            <div><img src={url} alt={name} /></div>
            <div>
                <div className="name">{name}</div>
                <div className="price">{price} ₽</div>
            </div>
        </div>
        <div className="delete">
            <button className="delete-button" onClick={() => {setToZero(id)}}>
                <img src="https://imgur.com/pYXFnWF.png" alt="Delete" />
            </button>
        </div>
        <div><div className="amount-wrapper">
            <button className="amount-button" onClick={() => {ChangeAmount(id, -1)}}>-</button>
            {amount}
            <button className="amount-button" onClick={() => {ChangeAmount(id, +1)}}>+</button>
        </div></div>
        <div className="total"><div className="total-wrapper">
            {price * cart[id]} ₽
        </div></div>
    </div>
    )
}

export default ListItemComponent;