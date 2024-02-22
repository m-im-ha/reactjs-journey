import { useState } from "react";

export default function App() {
  return (
    <div>
      <RandomColor />
    </div>
  );
}

function RandomColor() {
  const [color, setColor] = useState("");

  function generateRandomHexColor() {
    const randomColor = `#` + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  function handleRandomHex() {
    setColor(generateRandomHexColor());
  }

  function generateRandomRgbColor() {
    const randomColor =
      `rgb(` +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    return randomColor;
  }

  function handleRandomRgb() {
    setColor(generateRandomRgbColor());
  }

  function generateRandomGradientColor(){
    const color1 = generateRandomHexColor();
    const color2 = generateRandomHexColor();
    const gradientColor = `linear-gradient(to right, ${color1},${color2})`;
    return gradientColor;
  }

  function handleRandomGradient(){
    setColor(generateRandomGradientColor());
  }

  return (
    <div
      style={{
        background: color,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Random Color Generator</h1>
      <div>
        <button onClick={handleRandomHex}>Random-HEX-Color</button>
        <button onClick={handleRandomRgb}>Random-RGB-Color</button>
        <button onClick={handleRandomGradient}>Random-Gradient-Color</button>
      </div>
      <p>{color}</p>
    </div>
  );
}
