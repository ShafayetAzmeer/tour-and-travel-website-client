import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () =>{

    const [user, setUser] = useState({}); 
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {

        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup (auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        .finally(()=> setIsLoading(false));
    } 

    useEffect ( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
           if(user){
               setUser(user);
           } 
           else{
               setUser({})
           }
           setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{ })
        // .fianlly(()=> setIsLoading(false));
    }



    return {
        
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;
