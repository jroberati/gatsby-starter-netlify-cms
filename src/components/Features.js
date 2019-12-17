import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <section className='flex flex-col m-3 items-center sm:flex-row' key={item.text}>
        <PreviewCompatibleImage className='flex flex-initial m-5 w-2/3 sm:w-1/4 sm:flex-shrink-0' imageInfo={item} />
        <p className='flex flex-grow'>{item.text}</p>
      </section>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
