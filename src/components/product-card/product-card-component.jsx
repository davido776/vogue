import React,{useContext} from 'react'

import {ProductCardContainer,Price,Name,Footer} from './product-card-styles';

import Button from '../button/button-component';
import { CartContext } from '../../context/cart-context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartContext = useContext(CartContext)

  const {addItemToCart} = cartContext

  const addCartItem = () => addItemToCart(product)

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