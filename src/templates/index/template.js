import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import Features from 'components/features'

const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Image fluid={image.childImageSharp.fluid} />
    <div>
      <h1>{title}</h1>
      <h3>{subheading}</h3>
    </div>
    <section>
      <div>
        <div>
          <h1>{mainpitch.title}</h1>
          <h3>{mainpitch.description}</h3>
        </div>
        <div>
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>             
        <Features gridItems={intro.blurbs} />
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
  })
}

export default IndexPageTemplate