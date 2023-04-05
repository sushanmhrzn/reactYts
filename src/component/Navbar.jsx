import React from 'react'
import '../css/app.css'
import {Link} from 'react-router-dom';
import HomePage from '../Pages/HomePage';


const Navbar = (props) => {
  //
  function handleChange(e){
    props.onValueChange(e.target.value);
  }

  return (
    <div className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About us</Link></li>
        <li><Link to="/">News</Link></li>
        <li style={{float: "right"}}><Link to="/" >Account</Link></li>
        <li style={{float: "right"}}><input type='text' placeholder='Search...' onChange={handleChange}/></li>
      </ul>
    </div>
  )
}

export default Navbar