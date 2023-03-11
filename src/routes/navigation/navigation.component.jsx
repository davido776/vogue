import { Fragment,useContext } from 'react';
import {Outlet,Link} from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon-component';
import { signOutUser } from '../../utilities/firebase/firebase.utils';

import {NavLinkContainer,NavigationContainer,Logo,LogoContainer, NavLink} from './navigation.styles.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown-component';

import {useSelector} from 'react-redux'
import { SelectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';


const Navigation = () => {
    const currentUser = useSelector(SelectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
   
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    {/* <CrwnLogo className='logo' /> */}
                    <Logo>
                        {/* <h3 className='logo'>INVOGUE</h3> */}
                        INVOGUE
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