import React, { Component } from 'react';
import {
  Container
}from 'reactstrap';

class Projectfooter extends Component {
  render() {
    return(
      <div className ="Projectfooter bg-dark text-white">
        <Container>
          <a className ="btn btn-outline-primary btn-lg"> follow &gt;</a>
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
