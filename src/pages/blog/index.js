import React from 'react'

import Layout from 'components/layout'
import BlogRoll from 'components/blogRoll'

export default () =>
  <Layout className='flex items-center flex-col mx-3'>
    <div class='mx-6 sm:w-4/5 lg:w-2/3'>
      <h1>
        Latest Stories
      </h1>
      <section className='px-3'>
        <BlogRoll />
      </section>
    </div>
  </Layout>
