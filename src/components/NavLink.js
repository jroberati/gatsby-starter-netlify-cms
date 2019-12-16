import React from 'react'
import { Link } from 'gatsby'

export default props => 
  <Link 
    className='uppercase p-5'
    {...props}>
    {props.children}
  </Link>

