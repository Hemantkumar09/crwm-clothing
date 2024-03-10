// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHUYgItnmzD1-UVLd_liB0kKkTuPT7gag",
  authDomain: "crwn-clth-db-8dcae.firebaseapp.com",
  projectId: "crwn-clth-db-8dcae",
  storageBucket: "crwn-clth-db-8dcae.appspot.com",
  messagingSenderId: "920755405096",
  appId: "1:920755405096:web:692b13c8da8f631b56101d"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid)
    console.log(userDocRef);

    
    const getUSerData = await getDoc(userDocRef);
    console.log(getUSerData);

    if(!getUSerData.exists()){
        const {displayName, email} = userAuth
        const createdAt  = new Date()

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log("Error while adding user: " + error.message)
        }
    }

    return userDocRef;

} 

