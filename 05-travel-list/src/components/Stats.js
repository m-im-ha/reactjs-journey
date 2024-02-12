export default function Stats({ list }) {
  if (list.length === 0)
    return (
      <footer className="stats">
        <em>Start adding your items.</em>
      </footer>
    );
  const numOfItem = list.length;
  const numOfPacked = list.filter((item) => item.packed).length;
  const numPercentage = Math.round((numOfPacked / numOfItem) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything. Ready to go 🚀"
          : `👜 You Have ${numOfItem} items on your list, and you already packed ${numOfPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
