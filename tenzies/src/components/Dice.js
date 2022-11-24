import React from "react";

export default function Dice(props){
    const styles ={
        backgroundColor: props.isHeld ? "#59E391" : "fff"
    }
    return(
        <div onClick={props.holdDice} className="dice" style={styles}>
            <h2 className="dice--style">{props.die}</h2>
        </div>
    )
}