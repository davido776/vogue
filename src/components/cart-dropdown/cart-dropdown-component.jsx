import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';

import Button from '../button/button-component';
import CartItem from '../cart-item/cart-item-component';

import {CartDropdownContainer,CartItems} from './cart-dropdown-styles.jsx';

const CartDropdown = () =>{ 

    const cartContext  = useContext(CartContext);
    const navigate = useNavigate();

    const gotoCheckOutHandler = () => navigate("/checkout")

    const {cartItems} = cartContext
    return (
    <CartDropdownContainer>
        <CartItems>
        {
            cartItems.map(item => (
                <CartItem key={item.id} cartItem={item}/>
            ))
        }
        </CartItems>
        <Button onClick={gotoCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
)};

export default CartDropdown;