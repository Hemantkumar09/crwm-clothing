//import { Link } from "react-router-dom"
import  SignUpForm  from '../../component/sign-up-form/sign-up-form.component';
import SignInForm from '../../component/sign-in/sign-in.component';
import './authentication.style.scss'


const Authentication = () =>{
        return( 
        <div className='authentication-container'>
            <SignInForm/>            
            <SignUpForm />
        </div>       
    )
}

export default Authentication