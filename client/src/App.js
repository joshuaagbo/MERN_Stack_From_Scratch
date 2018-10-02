import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Appnavbar';
import Projectfooter from './components/projectfooter';
import ShoppingList from './components/shoppinglist';
import Additem from './components/additem';
import { Provider } from 'react-redux';
import Store from './store';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store = { Store }>
        <div className="App">
          <AppNavbar />
          <Container>
            <Additem />
            <br />
            <ShoppingList />
          </Container>
          <br />
          <Projectfooter />
        </div>
      </Provider>
    );
  }
}

export default App;
