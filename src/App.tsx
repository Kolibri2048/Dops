import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    let [a, setA] = useState(1);
    // let a = 1
    const onClickHandler =() => {
        setA(++a)
        console.log(a)
    }

    const onClickHandlerZero =() => {
        setA(0)
        console.log(a)
    }
  return (
    <div className="App">
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandlerZero}>zero</button>
    </div>
  );
}

export default App;
