import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav({setIsLogin}) {
  const logoutSubmit = () =>{
    localStorage.clear()
    setIsLogin(false)
}

  return (
    <div className='nav-box'>
        <nav>
        <div className='logo'>
            <h2>NOTES</h2>
        </div>
        <li><Link className='nav-link' to="/">Home</Link></li>
        <li><Link className='nav-link' to="/create">Create Note</Link></li>
        <li onClick={logoutSubmit}><Link className='nav-link' to="/">Logout</Link></li>
    </nav>
    </div>
  )
}
