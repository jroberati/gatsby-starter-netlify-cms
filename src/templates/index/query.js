import { useStaticQuery, graphql } from 'gatsby'

export default () =>
  useStaticQuery(graphql`
    query IndexPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "index/index" } }) {
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
  `)