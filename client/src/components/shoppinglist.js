import React, { Component} from 'react';
import {
  ListGroupItem,
  ListGroup,
  Container,
  Button
} from 'reactstrap';

class Shoppinglist extends Component{
handleDel = ()=> {
  const { Listitems } = this.props;
  this.props.onDelete(Listitems);
}
render() {
  return(
    <ListGroup>
      <Container>
        <ListGroupItem className ="mb-2">
          {this.props.Listitems}
          <Button className ="float-right btn-danger" onClick = {this.handleDel}> &times; </Button>
          <div className ="clearfix"></div>
        </ListGroupItem>
      </Container>
    </ListGroup>
  )
}
}

export default Shoppinglist;
