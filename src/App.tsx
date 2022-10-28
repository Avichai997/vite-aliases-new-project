import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import "./App.css";
import Example from "@pages/Example";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;
