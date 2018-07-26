import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainList from './components/MainList/MainList';
import Detail from './pages/Detail';

class App extends Component {
  render () {
    return (
    <Router>
      <div className="App">
      <p> Hello React!</p>
        <Route exact path="/" component={MainList} />
        <Route exact path="/users/:id" component={Detail} />
      </div>
    </Router> 
    );
  }
}

render(<App/>, document.getElementById('react_entry'));
