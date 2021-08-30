import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
const App: React.FC =() => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
