import { useState, useContext } from "react";
import { createUserWithEmailandPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities";
import  FormInput  from "../form-input/form-input.component";
import Button from "../button/button.component";
import '../sign-in/sign-in.style.scss'
import { UserContext } from "../../contexts/user.contexts";


const displayFormDetails = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword: '',
};

const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(displayFormDetails)
    const {displayName, email, password, confirmPassword} = formFields;
    //console.log(formFields);

    
    console.log('hit');

    const resetFormFields = () =>{
        setFormFields(displayFormDetails);
    }
    const handleChange = (event) =>{
       const  {name , value} = event.target;
       setFormFields({...formFields, [name]: value})
    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (password !== confirmPassword){
            alert("password do not match")
            return; 
        } 
        try{
            const {user} = await createUserWithEmailandPassword(email, password);
           
            await createUserDocumentFromAuth (user, {displayName})
            resetFormFields()
            //console.log(response);             
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Cannot create account, email already exists");
            }
            else if(error.code === 'auth/popup-closed-by-user'){
                alert("Google popup closed by user");
            }
            else{
                console.log("Error: ", error);
            }
            
        }
    }
    return(
        <div className="sign-in-container">
            <h2>Don't have an account?</h2>           
            <span>Sign Up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type='text'
                    required 
                    name='displayName' 
                    onChange={handleChange} 
                    value={displayName}
                />
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
                <FormInput 
                    label = "Confirm Password"
                    type='password'
                    required 
                    name='confirmPassword' 
                    onChange={handleChange} 
                    value={confirmPassword}
                />
                <Button buttonType="defaultu" type="submit">Submit</Button>
            </form>

        </div>
    );

};

export default SignUpForm;

