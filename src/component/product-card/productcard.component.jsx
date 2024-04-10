import Button from '../button/button.component'
import './productcard.style.scss'
import { CartContext } from '../../contexts/cart-drop-down.context';
import { useContext } from 'react';

const ProductCard = ({products}) => {

    const {name, price, imageUrl} = products;
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => {
        console.log('add to cart clicked');
        addItemToCart(products)
    };

    return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
    </div>
    )
}

export default ProductCard