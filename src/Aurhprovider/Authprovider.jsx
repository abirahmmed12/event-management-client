import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase.confiq";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setloading] = useState(true)

  const createuser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn =(email,password) =>{
    setloading(true)
   return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    setloading(true)
    return signOut(auth)
  }
  useEffect ( ()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('user in the',currentUser)
        setUser(currentUser) 
        setloading(false)
    });
    return ()=>{
        unsubscribe()  
    }

  },[])

  const authInfo = {
    user,
    createuser,
    logIn,
    loading,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
