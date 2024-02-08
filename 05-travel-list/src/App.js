import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((elemenets) => [...elemenets, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((elements) => elements.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((elements) =>
      elements.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems} />
      <PackingList lists={items} deleteItem={handleDeleteItem} toggleItems={handleToggleItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ addItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.input);

    if (!description) return;

    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log(newItem);
    addItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          // console.log(e.target.value);
          setQuantity(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ lists, deleteItem, toggleItems }) {
  return (
    <div className="list">
      <ul>
        {lists.map((item) => (
          <Item itemobj={item} deleteItem={deleteItem} toggleItems={toggleItems} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemobj, deleteItem,toggleItems }) {
  return (
    <li>
      <input type="checkbox" value={itemobj.packed} onChange={() => toggleItems(itemobj.id)} />
      <span style={itemobj.packed ? { textDecoration: "line-through" } : {}}>
        {itemobj.quantity} {itemobj.description}
      </span>
      <button onClick={() => deleteItem(itemobj.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
