export default function Item({ element, deleteItem, toggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={element.packed}
        onChange={() => toggleItems(element.id)}
      />
      <span style={element.packed ? { textDecoration: "line-through" } : {}}>
        {element.selectNum} {element.description}
      </span>
      <button onClick={() => deleteItem(element.id)}>❌</button>
    </li>
  );
}
