import React from 'react';
import './App.css';
import Button from './components/button/button';
import NavBar from './components/navbar/NavBar';
const App: React.FC =() => {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Button label="click me"></Button>
      </header>
    </div>
  );
}

export default App;
