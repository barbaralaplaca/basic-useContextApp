import React, { useContext } from 'react'
import { MyGlobalContext } from '../App'
import './components.css'

export default function Home() {
    const { copy, setCopy } = useContext(MyGlobalContext)
    const home = (
        <p>This is clicked from <b>Home</b></p>
    )

  return (
    <div className='home'>
        <h3>This is the component Home</h3>
         <button onClick={() => setCopy(home)}>
            Click me!
        </button>
       <p>{copy}</p>
    </div>
  )
}
