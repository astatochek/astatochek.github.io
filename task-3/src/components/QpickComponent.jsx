import React from "react";
import {
    Link,
} from "react-router-dom";
import "./styles.css";

const QpickComponent = () => {

    return (
    <div>
        <Link to="/">
            <button className="qpick-button">QPICK</button>
        </Link>
    </div>
    )
}

export default QpickComponent;