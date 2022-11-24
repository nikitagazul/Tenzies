import React from "react";

export default function Dice(props){
    return(
        <div className="dice">
            <h2 className="dice--style">{props.die}</h2>
        </div>
    )
}