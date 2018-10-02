import React, { Component } from 'react';
import {
  Container,
  Button

}from 'reactstrap';

class Projectfooter extends Component {
  render() {
    return(
      <div className ="Projectfooter bg-dark text-white">
        <Container>
          <Button className ="btn-outline-primary"> follow &gt;</Button>
          <br />
          <br />

          <p>
          copyright &copy; 2018, @gemjosh.codes.it.
        </p>
        </Container>
      </div>
    )
  }
}

export default Projectfooter;
