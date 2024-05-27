import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  //let counter = 15;

  // const addvalue = () => {
  //   if (counter < 20) {
  //     counter = counter + 1;
  //     setCounter(counter);
  //   }
  // };

  const prevValue = () => {
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
  };

  const removevalue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      {/* <button onClick={addvalue}>Add value{counter}</button> */}
      <button onClick={prevValue}>prevValue{counter}</button>
      <button onClick={removevalue}>Remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
