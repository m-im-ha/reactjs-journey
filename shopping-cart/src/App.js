import { useState } from "react";

export default function App() {
  return (
    <div>
      <Title />
      <AddItem />
    </div>
  );
}

function Title() {
  return <h1>Shopping-Cart</h1>;
}

function AddItem() {
  const [item, setItem] = useState([]);
  // console.log(item);

  const [displayItem, setDisplayItem] = useState("");
  // console.log(displayItem);

  function handleAddItems(newItem) {
    setItem((elements) => [...elements, newItem]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setDisplayItem(displayItem);
    const els = { displayItem, id: Date.now() };
    handleAddItems(els);
    setDisplayItem("");
  }

  function handleDeleteItem(id) {
    setItem((elements) => elements.filter((x) => x.id !== id));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shopping Item..."
          value={displayItem}
          onChange={(e) => setDisplayItem(e.target.value)}
        />
        <button>Add</button>
        <ul className="item-container">
          {item.map((element) => (
            <div key={element.id}>
              <li>{element.displayItem}</li>
              <button onClick={() => handleDeleteItem(element.id)}>❌</button>
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}
