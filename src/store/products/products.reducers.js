import {
    LOAD_PRODUCTS_SUCCESS,
  } from './products.actionTypes';
  
  const initialState = [
     ];
  
  const productsReducers = (state=[...initialState], action) => {
    switch (action.type) {
      case LOAD_PRODUCTS_SUCCESS:
        return state;
      default:
        return state;
    }
  }
  
  export default productsReducers;