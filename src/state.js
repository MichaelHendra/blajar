import React, {useState} from "react";

function State (){

    const [counter, setCounter] = useState(0);

    function Add() {
        return setCounter(counter + 1);
    }
    function Rm(){
        return setCounter(counter - 1);
    }

    return (
        <div>
            <p>Implemeting State On This Page</p>

            <h1>{counter}</h1>

            <button onClick={Add}>Add</button>
            <button onClick={Rm}>Less</button>
        </div>
    );

}

export default State;