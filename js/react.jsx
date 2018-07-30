import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./components/Users";
import UserDetail from "./pages/UserDetail";

class App extends Component {

  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Users} />
          <Route exact path="/users/:id" component={UserDetail} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react_entry'));

