import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    // const myFirstSubscribe = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('2')
    // }
    //
    // const mySecSubscribe = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Ivan')
    // }

    // const onClickHandler = (name:string) =>{
    //     console.log(name)
    //
    // }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    //
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    const Button1foo =(subscriber:string, age: number) => {
        console.log(subscriber, age)
    }

    const Button2foo =(subscriber:string, age: number) => {
        console.log(subscriber, age)
    }
  return (
    <div className="App">
      <Button  name={'MyYutubeChanel-1'} onClick={() => Button1foo('Ivan', 21)}/>
      <Button  name={'MyYutubeChanel-2'} onClick={() =>Button2foo ('Vasia', 20)}/>
    </div>
  );
}

export default App;
