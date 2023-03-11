
import {CartIconContainer,ShoppingIcon,ItemCount} from './cart-icon-styles.jsx';

import {useSelector,useDispatch} from 'react-redux'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const IsCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!IsCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon  />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;