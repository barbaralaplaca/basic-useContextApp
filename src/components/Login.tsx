import React, { useContext } from 'react'
import { MyGlobalContext } from '../App'

export default function Login() {
    const { copy, setCopy } = useContext(MyGlobalContext)
    const login = (
        <p>This is clicked from <b>Login</b></p>
    )
  return (
    <div className='login'>
        <h3>This is the component Login</h3>
         <button onClick={() => setCopy(login)}>
            Click me!
        </button>
        <p>{copy}</p>
    </div>
  )
}
