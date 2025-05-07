import React from 'react'
function Btn(props){
    return(<div>
        <button style={{backgroundColor:props.color}}>{props.btnName}</button>
    </div>)
}
export default Btn  