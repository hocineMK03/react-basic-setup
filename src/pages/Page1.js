
import React from 'react'

import NavBar from '../components/NavBar'

import { useState } from 'react'
function Page1  () {
    
    const [text,setText]=useState("Guten Tag")
    const navbartext="Page1"

    const handleClick=()=>{
        
        if(text==="Bonjour"){
            setText(2)
        }
        else{
            setText("Bonjour")
        }
       
    }
  return (
    <div>
        <NavBar  navbartext={navbartext}  text={text}/>
        <h1>Page1</h1>

        <p>{text}</p>

        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Page1