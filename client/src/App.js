import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Appnavbar';
import Projectfooter from './components/projectfooter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <br />
        <Projectfooter />
      </div>
    );
  }
}

export default App;
