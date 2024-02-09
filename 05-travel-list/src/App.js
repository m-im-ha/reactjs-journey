import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  console.log(items);

  function handleAddItems(item) {
    setItems((elements) => {
      // console.log(elements);
      // console.log(item);
      return [...elements, item];
    });
  }

  function handleDeleteItem(id) {
    // console.log(id);
    setItems((elements) =>
      elements.filter((item) => {
        // console.log(item);
        // console.log(item.id);
        return item.id !== id;
      })
    );
  }

  function handleToggleItems(id) {
    setItems((elements) =>
      elements.map((item) => {
        // console.log({...item,description:"fun",packed:!item.packed,id:888});
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems} />
      <PackingList
        lists={items}
        deleteItem={handleDeleteItem}
        toggleItems={handleToggleItems}
      />
      <Stats lists={items} />
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
    // console.log(newItem);
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
  // console.log(lists);
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = lists;

  if (sortBy === "description")
    sortedItems = lists
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = lists
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemobj={item}
            deleteItem={deleteItem}
            toggleItems={toggleItems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ itemobj, deleteItem, toggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemobj.packed}
        onChange={() => toggleItems(itemobj.id)}
      />
      <span style={itemobj.packed ? { textDecoration: "line-through" } : {}}>
        {itemobj.quantity} {itemobj.description}
      </span>
      <button onClick={() => deleteItem(itemobj.id)}>❌</button>
    </li>
  );
}

function Stats({ lists }) {
  if (!lists.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing lists.</em>
      </footer>
    );
  }

  const numItems = lists.length;
  const numPacked = lists.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);
  console.log(numPercentage);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything, Ready to go ✈"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
