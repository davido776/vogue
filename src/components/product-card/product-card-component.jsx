import React,{useContext} from 'react'

import {ProductCardContainer,Price,Name,Footer} from './product-card-styles';

import Button from '../button/button-component';

import {useDispatch,useSelector} from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  
  const addCartItem = () => dispatch(addItemToCart(cartItems,product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer className='footer'>
        <Name className='name'>{name}</Name>
        <Price className='price'>{price}</Price>
      </Footer>
      <Button buttonType='inverted' onClick={addCartItem} >Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;