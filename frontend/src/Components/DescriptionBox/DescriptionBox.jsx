import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="description-navigator-left">Description</div>
        <div className="description-navigator-right">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
      React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps
      </div>
    </div>
  )
}
