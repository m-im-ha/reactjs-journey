import { useState } from "react";
import TipSelection from "./TipSelection";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [CurTip, setCurTip] = useState(0);
  const [CurTip2, setCurTip2] = useState(0);

  function handleInput(e) {
    setBill(Number(e.target.value));
  }

  function handleReset(e) {
    setBill("");
    setCurTip(0);
    setCurTip2(0);
  }

  const tip = ((CurTip + CurTip2) / 2 / 100) * bill;
  const totalBill = bill + tip;

  return (
    <div>
      <p>How much was the bill?</p>
      <input
        value={bill}
        type="text"
        placeholder="Bill Value"
        onChange={handleInput}
      />
   
      <TipSelection curtip={CurTip} handletip={(e)=>setCurTip(e.target.value)}>
        <p>How did you like the service?</p>
      </TipSelection>

      <TipSelection curtip={CurTip2} handletip={(e)=>setCurTip2(e.target.value)}>
        <p>How did your friend like the service?</p>
      </TipSelection>

      {bill > 0 && (
        <>
          {" "}
          <h3>
            You pay ${totalBill} (${bill} + ${tip.toFixed(2)} tip)
          </h3>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}
