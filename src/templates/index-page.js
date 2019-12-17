import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div className='p-3 flex flex-col items-center'>
    <Image className='w-full' fluid={image.childImageSharp.fluid} />
    <div className='my-3'>
      <h1 className='my-3 font-bold'>{title}</h1>
      <h3 className='my-3'>{subheading}</h3>
    </div>
    <section className='flex items-center flex-col mx-3'>
      <div class='sm:w-4/5 lg:w-2/3'>
        <div>
          <h1 className='my-3 italic'>{mainpitch.title}</h1>
          <h3 className='my-3 mx-4'>{mainpitch.description}</h3>
        </div>
        <div>
          <h3 className='my-3 italic'>{heading}</h3>
          <p className='my-3 mx-4'>{description}</p>
        </div>             
        <Features gridItems={intro.blurbs} />
        <div>
          <h3 className="my-3 font-bold">
            Latest stories
          </h3>
          <BlogRoll />
          <div className='flex justify-center'>
            <Link to="/blog">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
