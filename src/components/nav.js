import React from 'react'
import './nav.css'

function Nav({open, setOpen}) {
  return(
    <nav className={open ? 'visible' : 'notVisible'}>
      <ul>
        <li>
          <a href='#home' onClick={() => setOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' onClick={() => setOpen(false)}>
            About Me
          </a>
        </li>
        <li>
          <a href='#projects' onClick={() => setOpen(false)}>
            Projects
          </a>              
        </li>
        <li>
          <a href='#contact' onClick={() => setOpen(false)}>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav