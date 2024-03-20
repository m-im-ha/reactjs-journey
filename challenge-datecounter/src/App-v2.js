import { useReducer } from "react";

const initialState = {count:0,step:1};

function reducer(state, action) {
  switch(action.type){
    case "inc" :
      return {...state,count:state.count+state.step}
    case "dec" :
      return {...state,count:state.count-state.step}
    case "setCount" :
      return {...state,count:action.payload}
    case "setStep" :
      return {...state,step:action.payload}
      default :
      throw new Error("Unknown Action.");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleDec() {
    dispatch({ type: "dec" });
  }

  function handleInc() {
    dispatch({ type: "inc" });
  }

  function handleCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  function handleStep(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input type="range" value={step} onChange={handleStep} min="1" max="10" />
      <p>Step : {step}</p>
      <div>
        <button onClick={handleDec}>-</button>
        <input type="text" value={count} onChange={handleCount} />
        <button onClick={handleInc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
    </div>
  );
}
