import React from 'react'
import {  useState } from "react"
import "./style/login.css"
import { useLOgin } from "../hooks/useLogin";


export default function Login() {

    const [ email, setEmail ] = useState('')
    const [ Password, setPassword ] = useState('')
    const { login, isLoading, error } = useLOgin();
    const HandleSubmit = ((e)=>{
        e.preventDefault()
        const data = { email, Password }
        login(data)
    })
  return (
    <div className='Login'>
        <div className="login-container">
            <form onSubmit={HandleSubmit}>
                <h2>Login</h2>
                <div className="email">
                    <input type="text" placeholder='Email' onChange={((e)=> setEmail(e.target.value))} value={email} />
                </div>
                { error && <p className='error-message'> {error} </p> }
                <div className="email">
                    <input type="password" placeholder='Password' onChange={((e)=> setPassword(e.target.value))} value={Password} />
                </div>
                {isLoading ? <button>Loading...</button> :
                         <button disabled={isLoading} type="submit">Submit</button> 
                    }
            </form>
        </div>
    </div>
  )
}
