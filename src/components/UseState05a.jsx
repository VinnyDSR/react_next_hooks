import React from "react";

export default({funcao})  => {

    return(
        <>
            <button onClick={funcao(10)}>Atualizar</button>
        </>
    )
}