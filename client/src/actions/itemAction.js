import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEM_LOAD
} from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
  dispatch(item_loading());
  axios
    .get('/api/items')
    .then(res => dispatch({
    type: GET_ITEMS,
    payload: res.data
  }))
}

export const item_add = item => dispatch => {
  axios.post('/api/item_add', item)
    .then(res => dispatch({
      type: ADD_ITEM,
      payload: res.data
    }))
};
export const del_Item = (id) => dispatch => {
  axios.delete(`/api/item_delete/${id}`)
    .then(res => dispatch({
      type: DELETE_ITEM,
      payload: res.data
    })
  )
  .catch((err)=> console.log('ERROR: ',err) )
}

export const item_loading = () => {
  return {
    type: ITEM_LOAD
  }
}
