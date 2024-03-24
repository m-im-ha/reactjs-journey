
import {createRoot} from "react-dom";
import Pet from "./Pet";

function App() {
  return (
    <div>
      <h1>Adopt Please!!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mixed" />
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
