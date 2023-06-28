import React from "react";
import "./UseState04.css";
import UseState04a from "./UseState04a";


export default () => {
    return(
        <>
            <h4>Exercício 02</h4>
            <div className="layout">
                {/* componentes */}
                <UseState04a unidades={1}/>
                <UseState04a unidades={5}/>
                <UseState04a unidades={10}/>
            </div>
        </>
    )
}