import React from "react"
import "./styles.css"
import Dice from "./components/Dice";

function App() {
  const [nums, setNums] = React.useState(allNewDice())

  function allNewDice(){
    const arr = []
    for(let i = 0; i <10; i++){
      arr.push(Math.floor(Math.random() * 6) + 1);
    }
    return arr
  }

  const numsElements = nums.map(item=> <Dice die={item}/>)

  
  return (
    <main className="app--border">
      <h1>Tenzies</h1>
      <h2>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
      <div className="dice--container">
        {numsElements}
      </div>
      <button>Roll Die</button>
    </main>
  );
}

export default App;
