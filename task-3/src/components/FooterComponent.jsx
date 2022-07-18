import React from "react";
import "./styles.css";
import QpickComponent from "./QpickComponent";

const FooterComponent = () => {
    return (
    <div className="footer">
        <div className="item">
            <QpickComponent />
            </div>
        <div className="item">
            <div>Избранное</div>
            <div>Корзина</div>
            <div>Контакты</div>
        </div>
        <div className="item">
            <div>Условия сервиса</div>
            <div className="row">
                <div><img src="https://imgur.com/Nv3fFko.png" alt="Globe" id="globe" /></div>
                <div id="chosen">Рус</div>
                <div>Eng</div>
                </div>
        </div>
        <div className="item">
            <img src="https://imgur.com/hu9BSaC.png" alt="social" id="social" />
        </div>
    </div>
    )
}

export default FooterComponent;