import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='Header'>
        <div className='HeaderTitle'>
            <Link to='/'><img src='logo.svg' alt='Logo' /></Link>
            <h1>Flash</h1>
        </div>
        <nav className='HeaderNav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header