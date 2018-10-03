import React, {
  Component
} from 'react';
import propTypes from 'prop-types';
import {
  item_add
} from '../actions/itemAction';
import {
  connect
} from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

class Additem extends Component {
  state = {
    name: '',
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {Items} = this.props.item;
    const item = {
      item: this.state.name
    }
    if(!this.state.name){
      alert('make sure the filed is NOT EMPTY');
      this.toggle();
      return false;
    }else if(Items.length >= 10){
      this.toggle();
      setTimeout(()=> alert('limit reached...! \nCan\'t add more than 10'),2000);
      return false;
    }else {
      this.props.item_add(item);
      this.toggle();
      setTimeout(()=> alert('new list was added'),2000)
    }
  }
  render() {
    return (
      <div>
        <Button onClick = { this.toggle }
        color = "primary">+</Button>
        <Modal toggle = { this.state.toggle }
        isOpen = { this.state.isOpen } >
        <ModalHeader >
        <Label htmlFor = "item" >
        Add Item
        </Label>
        </ModalHeader >
        <ModalBody>
        <Form onSubmit = { this.handleSubmit } >
        <FormGroup >
        <Input type = "text" name = "name" id = "name" placeholder = "enter a shopping item here...."
        onChange = { this.handleChange } />
        <Button className = "btn-danger float-left btn-md"
        style = {{
            marginTop: '5px'
          }}
        onClick = {
          this.toggle
        } > cancel </Button><
        Button className = "float-right btn-md"
        color = "primary"
        type = "submit"
        style = {
          {
            marginTop: '5px'
          }
        } >
        Add
        </Button>
        </FormGroup >
        </Form>
        </ModalBody>
        <ModalFooter >
        </ModalFooter>
        </Modal >
      </div>
    );
  }
}

Additem.propTypes = {
  item_add: propTypes.func.isRequired,
  item: propTypes.object.isRequired
}
const mapStateToProps =(state)=>(
  {
    item:state.item
  }
)
export default connect(mapStateToProps, {
  item_add
})(Additem);
