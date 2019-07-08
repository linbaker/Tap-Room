import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from './NavBar';
import HomeSplash from './HomeSplash';
import About from './About';
import BeerList from './BeerList';
import BeerListByIBU from './BeerListByIBU';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <NavBar/>
      <Switch>
          <Route exact path="/" component={HomeSplash} />
          <Route path="/BeerList" component={BeerList} />
          <Route path="/AboutUs" component={About} />
        </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
