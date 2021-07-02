import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
