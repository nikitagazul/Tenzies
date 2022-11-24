import React from "react"
import "./styles.css"


function App() {
  return (
    <main className="app--border">
      <h1>Tenzies</h1>
      <h2>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
      <div> 
        <div className="box">

        </div>
        <button>Roll</button>
      </div>
    </main>
  );
}

export default App;
