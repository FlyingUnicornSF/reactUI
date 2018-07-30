import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className="App">
      <p> Hello React!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('react_entry'));
