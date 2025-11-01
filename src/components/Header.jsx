import React from 'react'

function Header() {
  return (
    <header className='Header'>
        <div className='HeaderTitle'>
            <img src='logo.svg' alt='Logo'/>
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