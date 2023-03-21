import React from 'react'
import '../css/app.css'
import {Link} from 'react-router-dom';
import HomePage from '../Pages/HomePage';


const Navbar = (props) => {
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