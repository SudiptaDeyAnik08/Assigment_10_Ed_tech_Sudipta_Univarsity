import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.config'

export const AuthenticationProviderAPI = createContext();

const auth = getAuth(app);

const  AuthProvider = ({children}) =>{

    const [user,setUser] = useState(null);

    // Creating Uesr With Email And Pass
    const createUserEmailPass=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    // Signin User
    const siginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Verify Email
    const emailVarify = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    // LogOut
    const logOut = ()=>{
    
        return signOut(auth);
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user == null || user?.emailVerified){
                const userId = user.uid; 
                setUser(user)
            }
            return () =>{
                unsubscribe();
            }
        })
    },[])

    const authInfo = {user,logOut,createUserEmailPass,siginUser,emailVarify};
    return(
        <AuthenticationProviderAPI.Provider value={authInfo}>
            {children}
        </AuthenticationProviderAPI.Provider>
        
    )
}

export default AuthProvider