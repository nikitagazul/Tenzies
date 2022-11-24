import React from "react"
import "./styles.css"
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

function App() {
  const [nums, setNums] = React.useState(allNewDice())

  const [tenzie, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = nums.every(num => num.isHeld)
    const firstValue = nums[0].value
    const allSameValue = nums.every(num => num.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [nums])

  function generateNewDie() {
    return {
      value: (Math.floor(Math.random() * 6) + 1),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(generateNewDie());
    }
    return arr
  }

  function rollDice() {
    setNums(prevState => prevState.map(item => {
      return item.isHeld ?
        item :
        generateNewDie()
    }))
  }

  function holdDice(id) {
    setNums(prevState => prevState.map(item => {
      return item.id === id ?
        { ...item, isHeld: !item.isHeld } :
        item
    }))
  }

  const numsElements = nums.map(item => <Dice
    key={item.id}
    die={item.value}
    isHeld={item.isHeld}
    holdDice={() => holdDice(item.id)}
  />)

  return (
    <main className="app--border">
      {tenzie && <Confetti/>}
      <h1>Tenzies</h1>
      <h2>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
      <div className="dice--container">
        {numsElements}
      </div>
      <button className="roll--dice" onClick={rollDice}>{tenzie ? "Play Again" : "Roll"}</button>
    </main>
  );
}

export default App;
