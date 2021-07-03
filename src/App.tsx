import React from 'react';
import './App.css';
import Button from './components/button/button';

const App: React.FC =() => {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me"></Button>
      </header>
    </div>
  );
}

export default App;
