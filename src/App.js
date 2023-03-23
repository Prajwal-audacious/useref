import React, { useRef } from "react";

function App() {
  const focusPoint = useRef();
  const onClickHandler = () =>
  focusPoint.current.style.backgroundColor = prompt("enter a colour")
  
    
    return (
      <>
    <div className="wrapper">
      <div ref={focusPoint} className="box">
        <button className="btn" onClick={onClickHandler}>
          change colour
        </button>
      </div>
     
    </div>
  </>
);
}

export default App;
