import React, { Component } from 'react';
import './App.css';
import  NavbarComponent  from '../src/components/navbar/navbar-component';
import RouterMain from '../src/router/router-main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent></NavbarComponent>
        <RouterMain></RouterMain>
      </div>
    );
  }
}

export default App;