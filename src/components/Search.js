import React from 'react'
import './css/search.scss'
export default function Search() {
  return (
    <div className='sbtn-main'>
    <div className="section-title">Awesome Exercises You Should Know</div>
    <form onsubmit="event.preventDefault();" role="search">
    <label for="search">Search for stuff</label>
    <input id="search" type="search" placeholder="Search..." autofocus required />
    <button className='sbut' type="submit">Go</button>    
  </form></div>
  )
}
