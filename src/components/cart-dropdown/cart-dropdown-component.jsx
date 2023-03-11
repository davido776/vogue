import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button-component';
import CartItem from '../cart-item/cart-item-component';

import {CartDropdownContainer,CartItems} from './cart-dropdown-styles.jsx';

import {useSelector} from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () =>{ 

    
    const navigate = useNavigate();

    const gotoCheckOutHandler = () => navigate("/checkout")

    const cartItems = useSelector(selectCartItems) 
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