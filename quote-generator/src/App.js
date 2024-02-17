import { useEffect, useState } from "react";

export default function App() {
  const [advice, setQuote] = useState("");

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setQuote(data.slip.advice);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <Title />
      <Quote advice={advice} />
      <Button getAdvice={getAdvice}>Advice</Button>
      <Button2  advice={advice}>Tweet</Button2>
    </div>
  );
}

function Title() {
  return <h1 className="title">Advice Generator</h1>;
}

function Quote({ advice }) {
  return <h3 className="advice">{advice}</h3>;
}

function Button({ children, getAdvice }) {
  return <button className="btn" onClick={getAdvice}>{children}</button>;
}

function Button2({ children,advice }) {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${advice}`;

  return <button className="btn" onClick={()=>window.open(twitterUrl)}>{children}</button>;
}
