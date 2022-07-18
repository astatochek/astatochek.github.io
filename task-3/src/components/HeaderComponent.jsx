import React from "react";
import CartComponent from "./CartComponent";
import "./styles.css";
import QpickComponent from "./QpickComponent";

const HeaderComponent = () => {
    return (
    <div className="header">
        <div className="name-block">
            <QpickComponent />
        </div>
        <CartComponent />
    </div>
    )
}

export default HeaderComponent;