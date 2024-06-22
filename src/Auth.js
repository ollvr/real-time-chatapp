/* eslint-disable no-unused-vars */
import { auth,db } from "./firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "firebase/auth";
import { doc , setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
    const navigate = useNavigate()

    const register = async(name,email,password)  =>{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        const user = userCredential.user
        await setDoc(doc(db,"users",user.uid),{
            name,
            email,
            uid:user.uid
        })
        navigate("/dashboard")
    }

    const login = async(email,password) =>{
        await signInWithEmailAndPassword(auth,email,password)
        navigate("/dashboard")
    }

    const logout = async()=>{
        await signOut(auth)
        navigate("/")
    }

    return {
        register,
        login,
        logout
    }
}