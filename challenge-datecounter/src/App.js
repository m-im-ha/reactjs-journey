import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [range,setRange] = useState(1);
  // console.log(+range)

  function handleRange(e){
    e.preventDefault();
    setRange(+e.target.value);
  }

  function handleReset(){
    setCount(0);
    setRange(1);
  }

  const date = new Date();
  date.setDate(date.getDate()+count);
  // console.log(date);

  return (
    <div>
      <div>
        <input type="range" min="0" max="10" value={range} onChange={handleRange}/>
        <span>Step:{+range}</span>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - +range)}>-</button>
        {/* <span>Counter:{count}</span> */}
        <input type="text" value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
        <button onClick={() => setCount((c) => c + +range)}>+</button>
      </div>
      <p><span>{count === 0 ? "Today is ":count>0?`${count} day from today is `:`${Math.abs(count)} days ago was `}</span>
      <span>{date.toDateString()}</span>
      </p>

      {(count !== 0 || range !== 1 ) ?<div>
        <button onClick={handleReset}>Reset</button>
      </div> : null}
    </div>
  );
}
