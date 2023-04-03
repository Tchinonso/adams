import React from 'react'
import {  useState } from "react"
import "./style/login.css"
import { useSignup } from "../hooks/useSignup"

export default function Signup() {

    const { signup, error, isLoading } = useSignup()

    const [ email, setEmail ] = useState('')
    const [ Password, setPassword ] = useState('')
    const [ CPassword, setCPassword ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ firstname, setFirstname ] = useState('')
    const [ lastname, setLastname ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ state, setState ] = useState('')

    const HandleSubmit = ((e)=>{
        e.preventDefault()
        if( Password !== CPassword ){
            alert("password did not match")
        }else{
            const data = { email, username, firstname, lastname,address, state, Password }
            signup(data)
        }
    })

  return (
    <div className='Login'>
        <div className="login-container">
            <form onSubmit={HandleSubmit}>
                <h2>Create account</h2>
                 <div className="email">
                    <input type="text" placeholder='Username' onChange={((e)=> setUsername(e.target.value))} value={username} required />
                </div>
                <div className="email">
                    <input type="text" placeholder='Email' onChange={((e)=> setEmail(e.target.value))} value={email} required/>
                </div>
                <div className="email">
                    <input type="text" placeholder='Firstname' onChange={((e)=> setFirstname(e.target.value))} value={firstname} required />
                </div>
                <div className="email">
                    <input type="text" placeholder='lastname' onChange={((e)=> setLastname(e.target.value))} value={lastname} required/>
                </div>
                <div className="email">
                    <input type="text" placeholder='State' onChange={((e)=> setState(e.target.value))} value={state} required/>
                </div>
                <div className="email">
                    <input type="text" placeholder='address' onChange={((e)=> setAddress(e.target.value))} value={address} required/>
                </div>
                <div className="email">
                    <input type="password" placeholder='Password' onChange={((e)=> setPassword(e.target.value))} value={Password} required />
                </div>
                <div className="email">
                    <input type="password" placeholder='Confirm Password' onChange={((e)=> setCPassword(e.target.value))} value={CPassword} required/>
                </div>
                { error && <p className='error-message'>{error}</p> }
                <div className="submit">
                    
                    {isLoading ? <button>Loading...</button> :
                         <button disabled={isLoading} type="submit">Submit</button> 
                    }
                </div>
            </form>
        </div>
    </div>
  )
}
