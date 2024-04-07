import ProductCard from '../../component/product-card/productcard.component';
import { ProductsContext } from '../../contexts/products.contexts'
import { useContext } from 'react'
import './shop.style.scss'

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return(
        <div className='products-container'>
            {products.map((products) =>(    
                <ProductCard key={products.id} products={products}/>    
            )) }
        </div>
    )
}

export default Shop;