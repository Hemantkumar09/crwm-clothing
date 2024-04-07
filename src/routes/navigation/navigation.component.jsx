import {Outlet} from 'react-router-dom'
import { Fragment , useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.style.scss'
import { UserContext } from '../../contexts/user.contexts';
import {signOutUser}  from '../../utilities/firebase/firebase.utilities'; 
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropDown from '../../component/cart-drop-down/cart-drop-down.component';
import {CartContext}   from '../../contexts/cart-drop-down.context';


const Navigation = () =>{
    const {currentUser, setCurrentUser} = useContext(UserContext);
    //console.log(currentUser);
   const {isCartOpen}  = useContext(CartContext);

    const signOutHandler = async () =>{
     await signOutUser();
     setCurrentUser(null);
    }
    return (
    <Fragment>
    <div className='navigation'>
        <div className='logo-container'>
            <Link to="/">
                <CrwnLogo className="logo"/>
            </Link>
        </div>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {currentUser ? (
                <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) : (
                    <Link className='nav-link' to="/auth">
                        SIGN IN
                    </Link> 
                )
            }
            <CartIcon/>
        </div>
        {isCartOpen && <CartDropDown/>} 
    </div>
        
    <Outlet/>
    </Fragment>
   
    );
}

export default Navigation