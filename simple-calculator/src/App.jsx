import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState(0)
  
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleOperation = (operation) => {
    const num = Number(input);
    if (isNaN(num)) return;

    input != "" && (setResult((prev) => {
      setInput("");
      
      switch (operation) {
        case "add": return prev + num;
        case "subtract": return prev - num;
        case "multiply": return prev * num;
        case "divide": return prev / num;
      }
    })
  )
  };
  
  return (
    <div className="main-container">
      <h1>Super Duper Simple Calculator</h1>
      <h2>{result}</h2>
      <input className="input" type="number" value={input} onChange={handleInputChange} placeholder="0" />
      <div className="btns-container">
        <button onClick={() => handleOperation("add")}>Add</button>
        <button onClick={() => handleOperation("subtract")}>Subtract</button>
        <button onClick={() => handleOperation("multiply")}>Multiply</button>
        <button onClick={() => handleOperation("divide")}>Divide</button>
        <button onClick={() => setInput(0)}>Del</button>
        <button onClick={() => setResult(0)}>Clear</button>
      </div>
    </div>
  );
};

export default App;