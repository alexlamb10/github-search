import React, {useState} from 'react'
import './Navbar.css'

function Navbar() {
    const [isActive, setIsActive] = useState(false)

    function toggleClass() {
            setIsActive(!isActive)
    }
    function navClicked() {
        setIsActive(false)
    }

  return (
    <div>
        <div className='header'>
            <nav className="navbar">
            <a href="#" className='nav-branding'>Search GitHub</a>

            <ul className={!isActive ? 'nav-menu' : 'nav-menu active'}>
                    <li className="nav-item">
                        <a href="#" className='nav-link' onClick={navClicked}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className='nav-link' onClick={navClicked}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className='nav-link' onClick={navClicked}>Contact</a>
                    </li>
            </ul>

            <div className={!isActive ? 'hamburger' : 'hamburger active'}  onClick={toggleClass}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
            </div>
    </div>
  )
}

export default Navbar