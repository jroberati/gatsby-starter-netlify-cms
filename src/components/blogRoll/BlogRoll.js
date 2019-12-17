import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import useQuery from './query'

const BlogRoll = props => {
  const { allMarkdownRemark } = useQuery()
  const { edges: posts } = allMarkdownRemark
  
  return (
    <div>
      {posts && posts.map(({ node: post }) => (
        <div key={post.id}>
          {!!post.frontmatter.featuredimage &&
            <Image fluid={{mage: post.frontmatter.featuredimage.childImageSharp.fluid}} />}
          <article>
            <header>
              <Link to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <div>{post.frontmatter.date}</div>
            </header>
            <div>
              <div>
                <p>{post.excerpt}</p>
                <Link to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogRoll
