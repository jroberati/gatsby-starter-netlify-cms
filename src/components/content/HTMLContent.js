import React from 'react'
import Content from './Content'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

HTMLContent.propTypes = Content.propTypes