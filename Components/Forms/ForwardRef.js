import React, { useRef, useState } from "react";
import ChildButton from "./ChildButton";

function ForwardRef() {
  const btnRef = useRef(null);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1); 
    console.log(count)
  }

  return (
    <div>
      <h1>Increment Counter: {count}</h1>
      <ChildButton ref={btnRef} onClick={handleClick}>
        Click
      </ChildButton>
    </div>
  );
}

export default ForwardRef;
