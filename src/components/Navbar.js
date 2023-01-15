import React from 'react'
import './css/navbar.css'
export default function Navbar() {
  return (
    <div className='nav-main'>
        <div className="nav-r">
            <h1>Get - Fit</h1>
        </div>
        <div className="nav-l">
            <a href="#afs"><h1 style={{borderBottom:'3px solid #000000'}}>Home</h1></a>
            <a href="#afs"><h1>Exercises</h1></a>
            <a href="#afs"><h1>About</h1></a>
            <a href="#afs"><h1>Contact</h1></a>
        </div>
    </div>
  )
}
