import { Fragment,useContext } from 'react';
import {Outlet,Link} from 'react-router-dom'

import { UserContext } from '../../context/user-context';
import { signOutUser } from '../../utilities/firebase/firebase.utils';

import './navigation.styles.scss';


const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);


    const handleSignOut = () => {
        signOutUser();
        setCurrentUser(null)
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    {/* <CrwnLogo className='logo' /> */}
                    <div>
                        <h3 className='logo'>INVOGUE</h3>
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                    SHOP
                    </Link>
                    {
                        currentUser 
                        ?
                        <span className='nav-link' onClick={handleSignOut}>SIGN OUT</span>
                        :
                        (
                            <Link className='nav-link' to='/auth'>
                            SIGN IN
                            </Link>
                        ) 
                    }
                   
                </div>
            </div>
            <Outlet />
      </Fragment>
    
    )
}


export default Navigation;