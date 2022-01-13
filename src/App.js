import logo from './logo.svg';
import './App.css';
import './style/index.scss'
import Home from './pages/Home';
import {useState, useEffect} from 'react'
import Todolist from './build/contracts/Todolist.json'


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
