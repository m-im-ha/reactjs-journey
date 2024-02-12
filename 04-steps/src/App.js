import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(isOpen);

  // console.log(step);

  function handlePrev() {
    if (step > 1) {
      return setStep((s) => s - 1);
    }
    // setStep(`${step < 0 ? messages.length-1 : step-1}`);
  }
  function handleNext() {
    if (step < 3) {
      return setStep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage stepNum={step}>
            <Button bgColor="#795643" textColor="#fff" onClick={()=>alert(`${messages[step - 1]}`)}>Learn How</Button>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ stepNum, children }) {
  return (<div className="message">
    <h3>Step {stepNum}</h3>
    {children}
  </div>);
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
