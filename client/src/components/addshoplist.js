import React, { Component} from 'react';
import Shoppinglist from './shoppinglist';
import {
  Container,
  FormGroup
 } from 'reactstrap';
 import uuid from 'uuid';

class Addshoplist extends Component{
    constructor(){
        super();
        this.state= {
            Items: []
        }
    }

    componentWillMount(){
        this.setState({
            Items: ['buy flower', 'buy milks', 'buy biscuits']
        })
    }

  handleSubmit = (e)=>{
      e.preventDefault();
      const { Items } = this.state;
      if(!this.refs.item.value) {
          alert('pls enter an item first!');
          return false;
      }else {
        Items.unshift(this.refs.item.value);
        this.setState({
          Items:Items,
          id: uuid.v4()
        });
      }
  }

  handleDeleteItem = (item)=> {
   const { Items } = this.state;
   let index = Items.findIndex(x=> x === item);
    Items.splice(index,1);
    this.setState({Items: Items});
  }

  render() {
     let ListItem;
     const { Items } = this.state;
     if(Items) {
      ListItem = Items.map(item => {
       return <Shoppinglist key ={ uuid.v4() } Listitems= { item } onDelete = { this.handleDeleteItem } />
     });
     }
    return(
    <div className ="Addshoplist">
       <Container>
         <form onSubmit= {this.handleSubmit}>
           <FormGroup>
             <h2 className="text-center"> Add a shoplist </h2>
              <input type="text" ref="item" className="form-control mb-2" name="item" placeholder ="add to your shopping list here...." />
              <input type="submit" className="form-control text-capitalize border-primary text-primary" name="submit"/>
           </FormGroup>
        </form>
      </Container>
       {ListItem}
  </div>
  )
  }
}

export default Addshoplist;
