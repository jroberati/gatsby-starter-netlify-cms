import React from 'react'
import Link from './NavLink'

export default () => {  
  return (
    <nav
      className="flex"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="flex flex-1 items-center p-2">
        MOD
      </div>
      <div className="flex flex-auto items-end justify-end p-2">
        <Link to="/about">
          Work
        </Link>
        <Link to="/products">
          Services
        </Link>
        <Link to="/blog">
          Neuro
        </Link>
        <Link to="/contact">
          Moderati
        </Link>
        <Link to="/contact/examples">
          Modhaus
        </Link>
      </div>
    </nav>
  )
}
