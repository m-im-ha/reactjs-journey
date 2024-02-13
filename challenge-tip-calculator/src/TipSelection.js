

export default function TipSelection({ children, curtip, handletip }) {
  return (
    <div>
      {children}
      <select value={curtip} onChange={handletip}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely good(20%)</option>
      </select>
    </div>
  );
}
