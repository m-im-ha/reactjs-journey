import { useState } from "react";

export default function App() {
  return (
    <div>
      <Title />
      <Quote />
      <Button>Quote</Button>
      <Button>Tweet</Button>
    </div>
  );
}

function Title() {
  return <h1>Quote Generator</h1>;
}

function Quote() {
  const [quote, setQuote] = useState([]);
  return <h3>.........................................................</h3>;
}

function Button({ children }) {
  return <button onClick={() => console.log(`clicked`)}>{children}</button>;
}
