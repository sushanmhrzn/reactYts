import React from 'react'
import '../css/app.css'
import HomePage from '../Pages/HomePage'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About us</Link></li>
        <li><Link to="/">News</Link></li>
        <li style={{float: "right"}}><Link to="/" >Account</Link></li>
      </ul>
    </div>
  )
}

export default Navbar