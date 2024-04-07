import { useState, useContext} from "react";
//import { createUserWithEmailandPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities";
import {signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailandPassword} from '../../utilities/firebase/firebase.utilities';
import  FormInput  from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in.style.scss';
import { UserContext } from '../../contexts/user.contexts'


const displayFormDetails = {
    email: '',
    password:'',
};


const SignInForm = () =>{
    const [formFields, setFormFields] = useState(displayFormDetails)
    const {email, password} = formFields;
    //console.log(formFields);


    const signInWithGoogle = async () => {
        try{
            const {user} = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
        }catch(error){
            if(error.code === 'auth/popup-closed-by-user'){
                alert('Google popup closed by the user');
            }
        }
        
    };

    const resetFormFields = () =>{
        setFormFields(displayFormDetails);
    }
    const handleChange = (event) =>{
       const  {name , value} = event.target;
       setFormFields({...formFields, [name]: value})
    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const {user} = await signInUserWithEmailandPassword(email, password);
            resetFormFields();      
        }catch(error){
            switch(error.code){
                case 'auth/invalid-credential':
                    alert('Invalid Credentials')
                    break;
                default:
                    console.log(error);
            }        
            
        }
    }
    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>           
            <span>Sign In with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label="Email"
                    type='email' 
                    required 
                    name='email' 
                    onChange={handleChange} 
                    value={email}
                />
                <FormInput 
                    label = "Password"
                    type='password'
                    required 
                    name='password' 
                    onChange={handleChange} 
                    value={password}
                />
                <div className="buttons-container">
                    <Button buttonType="default" type='submit' onClick={handleSubmit}>Sign In</Button>
                    <Button buttonType="google" type='button' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
                
            </form>
        </div>
    );

};

export default SignInForm;

