import React from 'react';
import './App.css';

function App() {
    // const myFirstSubscribe = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('2')
    // }
    //
    // const mySecSubscribe = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Ivan')
    // }

    const onClickHandler = (name:string) =>{
        console.log(name)

    }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    //
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

  return (
    <div className="App">
      <button onClick={() => {onClickHandler('sss')}}>YoutubeChanel-2</button>
      <button onClick={() => {onClickHandler('Hi')}}>YoutubeChanel-2</button>
        {/*<button onClick={foo1}>1</button>*/}
        {/*<button onClick={() =>foo2(100200)}>2</button>*/}
    </div>
  );
}

export default App;
