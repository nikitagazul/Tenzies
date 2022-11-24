import React from "react"
import "./styles.css"
import Dice from "./components/Dice";
import {nanoid} from "nanoid";

function App() {
  const [nums, setNums] = React.useState(allNewDice())

  function allNewDice(){
    const arr = []
    for(let i = 0; i <10; i++){
      arr.push({
        value: (Math.floor(Math.random() * 6) + 1), 
        isHeld: false,
        id: nanoid()
      });
    }
    return arr
  }

  const numsElements = nums.map(item=> <Dice 
    key = {item.id}
    die={item.value}
    isHeld={item.isHeld}
    />)

  function rollDice(){
    setNums(allNewDice())
  }

  
  return (
    <main className="app--border">
      <h1>Tenzies</h1>
      <h2>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
      <div className="dice--container">
        {numsElements}
      </div>
      <button className="roll--dice" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
