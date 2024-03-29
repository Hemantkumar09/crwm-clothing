import {Outlet} from 'react-router-dom'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.style.scss'


const Navigation = () =>{
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
            <Link className='nav-link' to="/auth">
                SIGN IN
            </Link>        
        </div>
    </div>
        
    <Outlet/>
    </Fragment>
   
    );
}

export default Navigation