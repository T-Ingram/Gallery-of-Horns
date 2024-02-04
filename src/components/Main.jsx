import { useState } from "react";

function Main () {

  const initialCount = 12;
  const [count, setCount] = useState(initialCount);
  
  
    function subtract() {
      setCount(count - 1);
    }
  
    function add() {
      setCount(count + 1);
    }
  
    return (
      <main>
        <h2>let's track things starting with {initialCount}</h2>
        <button onClick={subtract}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
        <p>Raise your hand if your favorite number is {count}.</p>
      </main>
    )
  }

export default Main;