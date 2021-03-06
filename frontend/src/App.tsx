import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BuidlerContext } from "./buidler/BuidlerContext";
import { Greeter } from './components/Greeter';
import { MyToken } from './components/MyToken'; // ADD THIS LINE

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BuidlerContext>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Greeter></Greeter>
          <MyToken></MyToken> 
        </BuidlerContext>
      </header>
    </div>
  );
}

export default App;

