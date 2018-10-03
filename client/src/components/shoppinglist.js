import React, {
  Component
} from 'react';
import {
  ListGroupItem,
  ListGroup,
  Button
} from 'reactstrap';

import {
  connect
} from 'react-redux';
import {
  getItems,
  del_Item
} from '../actions/itemAction';
import propTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  handleDelete = id=> {
    this.props.del_Item(id);
  }
  render() {
    const { Items } = this.props.item;
    const ListItem = Items.length?
      (
       Items.map(({ item,_id })=> (
        <ListGroupItem key = { _id } className ="card p-0">
         <div className ="card-body">
         { item }
         </div>
        <div className = "card-footer p-0">
          <Button className = "btn-danger float-right btn-sm mr-1" onClick = { this.handleDelete.bind(this,_id) } >
          &times;
          </Button>
          <div className = "clearfix"></div>
        </div>
      </ListGroupItem >
    ))
  ):
  (
    <div>
      <p> you have no item left....! </p>
    </div>
  );
  return(
    <div className = "list_items">
      { Items.length? (<h2> latest shoppinglist: </h2>): false }
      <ListGroup id= "List">
        { ListItem }
      </ListGroup>
    </div>
  )
}
}
ShoppingList.propTypes = {
  getItems: propTypes.func.isRequired,
  item: propTypes.object.isRequired,
  del_Item: propTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {
  getItems,
  del_Item
})(ShoppingList);
