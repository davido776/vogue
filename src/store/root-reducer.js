import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/categories.reducer';

import { userReducer } from './user/user.reducer';
//import { categoriesReducer } from './categories/categories.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart:cartReducer,
  categories: categoriesReducer,
});