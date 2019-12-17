import React from 'react'
import { Link } from 'gatsby'

export default () => 
  <nav role="navigation" aria-label="main-navigation">
    <div>
      MOD
    </div>
    <div>
      <Link to="/about">
        About
      </Link>
      <Link to="/blog">
        Blog
      </Link>
    </div>
  </nav>

