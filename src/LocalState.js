import { useState } from "react";

function LocalState()
{
    const [state, setState]= useState(0)//A package provided bt react for handling function
    const [color, setColor] = useState("white")
    const handleLike = () => {
        setState(state + 1)
        setColor("green")
    }
    const handleDislike = () => {
        setState(state -1)
        setColor("red")
    }

    return(
        <div style={{backgroundColor: color}}>
            <h1>{state}</h1>

            <button onClick={handleLike}>Like 👍</button>
            <button onClick={handleDislike}>Dislike👎</button>
        </div>
    );
}
export default LocalState;
