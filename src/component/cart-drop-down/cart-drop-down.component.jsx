import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-drop-down.context'
import './cart-drop-down.style.scss'
import Button from '../button/button.component'
import CartItem from '../cart-items/cart-items.component'

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    console.log(cartItems);

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>        
    )
}

export default CartDropDown