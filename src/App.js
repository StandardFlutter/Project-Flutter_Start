import React, { Component } from 'react';
import './App.css';

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="World" />
      </div>
    );
  }
}

export default App;