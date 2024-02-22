import { useState } from "react";

const faqs = [
  {
    title: "One Piece",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Naruto",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Attack On Titan",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <h1>Accordion</h1>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div>
      {data.map((faq, i) => (
        <AccordionItem title={faq.title} num={i} key={i}>
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, num, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div onClick={handleToggle} style={{ display: "flex" }}>
        <p>{num < 9 ? `0${num + 1}` : num + 1}</p>
        <h2>{title}</h2>
        <button>{isOpen ? "➖" : "➕"}</button>
      </div>
      {isOpen && <p>{children}</p>}
    </div>
  );
}
