import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

function App() {

  const user = null;

  return (
    <div className="app">
      {user?
      <HomePage/>
    : <Login/> }
      
    </div>
  );
}

export default App;
