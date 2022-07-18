import React, { useContext } from "react";
import CartContext from "./context/CartContext";
import "./styles.css";

const ItemComponent = (props) => {

    const id = props.id
    const name = props.name
    const price = props.price
    const rating = props.rating
    const url = props.url

    const { cart, setCart } = useContext(CartContext)

    /**
     * Прибавляет единицу к ячейке cart с индексом itemID
     * @param {int} itemID 0 <= itemID < Product.length
     */
    const BuyItem = (itemID) => {
        setCart(prev => {
            let next = [...prev]
            next[itemID]++
            return [...next]
        })
    }

    return (
    <div className="item">
        <img src={url}></img>
        <div className="info-box">
            <div className="left name">{name}</div>
            <div className="right price">{price} ₽</div>
            <div className="left rating"><img src="https://imgur.com/tRThOsL.png" alt="Star" />{rating}</div>
            <div className="right"><button className="buy-button" onClick={() => {BuyItem(id)}}>Купить</button></div>
        </div>
    </div>
    )
}

export default ItemComponent;