/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { useAuth } from './Auth'
import { Link } from 'react-router-dom'

function AuthForm({type}) {
    const {register,login} = useAuth()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(type == "register"){
            await register(name,email,password)
        }
        else{
            await login(email,password)
        }
    }
  return (
    <div className='container'>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <h2> {type == "register" ? "Register" : "Login"} </h2>
            {
                type == "register" && (
                    <input 
                     type='text'
                     placeholder='Name'
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                     required
                     />
                )
            }
            <input 
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
             required
            />

            <input 
            type='password'
            placeholder='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button>{type =="register" ? "Register" :"Login"}</button>

            {type=="login" && (
                <p> Don't have an account <Link to="/register">register</Link></p>
            )}
        </form>

    </div>
  )
}

export default AuthForm