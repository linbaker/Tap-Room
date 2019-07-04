import React from 'react';
import { HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from './NavBar';
import HomeSplash from './HomeSplash'

function App() {
  return (
    <div className="App">
    <HashRouter>
      <NavBar/>
    </HashRouter>
    <HomeSplash/>
    </div>
  );
}

export default App;
