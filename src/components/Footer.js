import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return <footer className='flex flex-col p-10 sm:p-20 md:flex-row-reverse'>
    <div className='flex flex-col flex-grow mb-5'>
      <div>MOD</div>
      <div>design@themoderati.com</div>
      <div>215.732.7666</div>
    </div>
    <div className='flex flex-col flex-grow'>
      <Link to='/'>Contact</Link>
      <Link to='/'>Instagram</Link>
      <Link to='/'>Facebook</Link>
      <Link to='/'>Linked In</Link>
      <div class='mt-5 italic'>
        121 S. Broad Street, Suite 200 <br/>
        Philadelphia, PA 19106
      </div>
    </div>
  </footer>
}