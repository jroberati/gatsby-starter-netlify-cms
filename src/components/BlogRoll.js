import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const query = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogRoll = props => {
  const { allMarkdownRemark } = useStaticQuery(query)
  const { edges: posts } = allMarkdownRemark
  
  return (
    <div>
      {posts && posts.map(({ node: post }) => (
        <div key={post.id} className='flex flex-col sm:flex-row'>
          {!!post.frontmatter.featuredimage &&
            <PreviewCompatibleImage 
              className='m-6 w-3/4 flex-shrink-0 self-center sm:self-start sm:w-1/3'
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
              }}
            />}
          <article className={`flex flex-col p-3 ${post.frontmatter.featuredpost ? 'border rounded' : ''}`}>
            <header className='flex flex-col'>
              <Link className='block font-bold my-3' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <div className='italic mb-3' >{post.frontmatter.date}</div>
            </header>
            <div>
              <div className=''>
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
