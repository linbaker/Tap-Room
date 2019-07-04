import React from 'react';
import { HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from './NavBar';
import HomeSplash from './HomeSplash';
import About from './About';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <NavBar/>
    </HashRouter>
    <HomeSplash/>
    <About/>
    </div>
  );
}

export default App;
