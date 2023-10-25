import './App.css';
import { useState } from "react"

function App() {
  let [count, setCount] = useState(0)
  let incCount = () => {
    setCount((prev) => prev + 1)
    console.log("Count===>" + count);
  }
  let decCount = () => {
    setCount((prev) => prev - 1)
    console.log("Count===>" + count);
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <span className="sapnTag">
        <button onClick={incCount} className="quatity-button">+</button><span>{count}</span><button onClick={decCount} className="quatity-button">-</button>
      </span>
    </div>
  );
}

export default App;
