import { Fragment,useContext } from 'react';
import {Outlet,Link} from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon-component';

import { UserContext } from '../../context/user-context';
import { CartContext } from '../../context/cart-context';
import { signOutUser } from '../../utilities/firebase/firebase.utils';

import {NavLinkContainer,NavigationContainer,Logo,LogoContainer, NavLink} from './navigation.styles.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown-component';


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    {/* <CrwnLogo className='logo' /> */}
                    <Logo>
                        <h3 className='logo'>INVOGUE</h3>
                    </Logo>
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink to='/shop'>
                    SHOP
                    </NavLink>
                    {
                        currentUser 
                        ?
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        :
                        (
                            <NavLink className='nav-link' to='/auth'>
                            SIGN IN
                            </NavLink>
                        ) 
                    }
                    <CartIcon/>
                </NavLinkContainer>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
      </Fragment>
    
    )
}


export default Navigation;