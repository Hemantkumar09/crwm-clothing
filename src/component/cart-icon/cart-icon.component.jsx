import './cart-icon.style.scss'
import {ReactComponent as ShoppingCart} from '../../assets/cart-logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-drop-down.context'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toogleCartIcon = () => {
        setIsCartOpen(!isCartOpen)
        console.log('cart icon clicked');
    }
    return(
        <div className='cart-icon-container' onClick={toogleCartIcon}>
            <ShoppingCart className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )

}

export default CartIcon