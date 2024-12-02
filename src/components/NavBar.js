

import React from 'react'

import './NavBar.css'
function NavBar ({navbartext="123",text="hello world"}) {
  return (
    
    <nav className='nav'>
        <h1>Navbar {navbartext}</h1>
    
        <ul>
            <li>
                <a href='/page1'>{text}</a>

            </li>

            <li>
                <a href='/page2'>Page2</a>
                
            </li>
        </ul>
    </nav>
  )
}

export default NavBar