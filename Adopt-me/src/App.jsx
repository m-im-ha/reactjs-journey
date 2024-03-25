
import {createRoot} from "react-dom/client";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div>
      <h1>Adopt Please!!</h1>
     <SearchParams/>
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
