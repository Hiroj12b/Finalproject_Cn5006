import React from 'react';
import './App.css';  // Import the CSS for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.svg').default} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in CN5006
        </a>
      </header>
    </div>
  );
}

export default App;
