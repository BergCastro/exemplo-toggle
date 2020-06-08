import React, { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(true);
  return (
    <div className="app">
      <div className={`${active ? 'side-bar active': 'side-bar'}`}></div>
      <header className="header">
        <button type="button" onClick={() => setActive(!active)}>toggle</button>
      </header>
    </div>
  );
}

export default App;
