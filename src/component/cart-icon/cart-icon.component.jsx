import './cart-icon.style.scss'
import {ReactComponent as ShoppingCart} from '../../assets/cart-logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-drop-down.context'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toogleCartIcon = () => setIsCartOpen(!isCartOpen)
    return(
        <div className='cart-icon-container' onClick={toogleCartIcon}>
            <ShoppingCart className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )

}

export default CartIcon