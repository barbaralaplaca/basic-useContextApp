import React, { useContext } from 'react'
import { MyGlobalContext } from '../App'

export default function Profile() {
    const { copy, setCopy } = useContext(MyGlobalContext)
    const profile = (
        <p>This is clicked from <b>Profile</b></p>
    )
  return (
    <div className='profile'>
        <h3>This is the component Profile</h3>
         <button onClick={() => setCopy(profile)}>
            Click me!
        </button>
        <p>{copy}</p>
    </div>
  )
}
