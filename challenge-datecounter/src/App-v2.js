import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "setCount") return action.payload;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, 0);
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
