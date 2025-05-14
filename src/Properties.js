import React from 'react'
import "./App.css";
import Btn from "./Btn";

function Properties() {

  const handleBtn = (value) => {
    alert(value);
  };
  
   return (
     <div className="App">
       <Btn btnName="Music" color="red" handleBtn={handleBtn} />
       <Btn btnName="Cars" color="blue" handleBtn={handleBtn} />
       <Btn btnName="bikes" color="pink" handleBtn={handleBtn} />
       <Btn btnName="Movies" color="skyblue" handleBtn={handleBtn} />
       <Btn btnName="Books" color="yellow" handleBtn={handleBtn} />
       <Btn btnName="Drama" color="orange" handleBtn={handleBtn} />
       <Btn btnName="Songs" color="bisque" handleBtn={handleBtn} />
       <Btn btnName="Photo" color="brown" handleBtn={handleBtn} />
       <Btn btnName="Table" color="aqua" handleBtn={handleBtn} />
     </div>
   );
}

export default Properties