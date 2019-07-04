import React from 'react';
import { HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <NavBar/>
    </HashRouter>
    </div>
  );
}

export default App;
