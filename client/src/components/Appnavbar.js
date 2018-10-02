import React, { Component} from 'react';
// import Addshoplist from './addshoplist';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }
    toggle= () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
      return(
      <div className="Appnavbar">
          <Navbar color="dark" dark expand="sm" className ="mb-5">
              <Container>
                  <NavbarBrand href = "/" className="text-capitalize"> shoppingList</NavbarBrand>
                  <NavbarToggler onClick = { this.toggle } />
                  <Collapse isOpen={ this.state.isOpen } navbar>
                      <Nav className = "ml-auto" navbar>
                          <NavItem>
                              <NavLink href="https://www.github.com/therealgemjosh" className="text-capitalize">
                              github
                              </NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </Container>
          </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
