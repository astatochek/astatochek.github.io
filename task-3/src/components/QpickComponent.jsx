import React, { useContext } from "react";
import "./styles.css";
import LayoutContext from "./context/LayoutContext";

const QpickComponent = () => {

    const { layout, setLayout} = useContext(LayoutContext)

    return (
    <div>
        <button className="qpick-button" onClick={() => {
            setLayout("main")
        }}>QPICK</button>
    </div>
    )
}

export default QpickComponent;