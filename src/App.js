import React, { useState } from 'react';
import './App.css';
import TestHook from './components/TestHook/TestHook';

function App() {

  const [state, setState] = useState("Some Text")
  const [name, setName] = useState("Moe")

  const changeText = () => {
    setState("Some Other Text")
  }

  const changeName = () => {
    setName("Steve")
  }

  return (
    <div className="App">
      <h1> Basic Hook useState </h1>
      <TestHook name={name} changeName={changeName} />
    </div>
  );
}

export default App;
