import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEM_LOAD
} from '../actions/types';

const initialState = {
  Items: [],
  isLoading: false
}

export default  (state = initialState, action)=> {
  // EITHER YOU USE IF STATEMENT OR SWITCH;
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        Items: action.payload,
        isLoading: false
      }
    case ADD_ITEM:
      return {
        ...state,
        Items: [action.payload,...state.Items]
      }
    case DELETE_ITEM:
      return {
        ...state,
        Items: state.Items.filter(item => item._id !== action.payload)
      }
    case ITEM_LOAD:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}
