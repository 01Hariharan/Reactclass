import React, { useState } from "react";

function Local_state(){
    const [state, setState] = useState(0)
    const [color, setColor] = useState("white")

    const like = () => {
        setState(state + 1)
        setColor("pink")
    }
    const dislike = () => {
        setState(state - 1)
        setColor("red");
    }
    return(
        <div style={{backgroundColor: color }}>
            <h1>{state}</h1>
            <button onClick={like}>Like😊</button>
            <button onClick={dislike}>Dislike☹️</button>
        </div>
    );
}
export default Local_state;
