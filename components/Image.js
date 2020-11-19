import PropTypes from 'prop-types'
import React, { useState, useContext } from 'react'
import { Context } from '../contexct/useContext'

export default function Image ({ img, className }) {
  const [ hovered, setHovered ] = useState(false)
  const { toggleFavorite, cartItems, addPhotosToCart, removePhotosFromCart } = useContext(Context)

  const heartIcon = () => {
    if (img.isFavorite) {
      return <i 
            className="ri-heart-fill favorite"
            onClick={() => toggleFavorite(img.id)}
          ></i>
    } else if (hovered) {
      return <i 
            className="ri-heart-line favorite"
            onClick={() => toggleFavorite(img.id)}
        ></i> 
    }
  } 
  // const cartIcon = hovered && <i 
  //   className="ri-add-circle-line cart"
  //   onClick={() => addPhotosToCart(img)}
  // ></i>

  const cartIcon = () => {
    const alreadyInCart = cartItems.some(cartItem => cartItem.id === img.id)
    if (alreadyInCart) {
      return <i 
        className="ri-shopping-cart-fill cart" 
        onClick={() => removePhotosFromCart(img.id)}
      ></i>
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addPhotosToCart(img)}></i>
    }
  }

  return (
    <div 
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        className="image-grid"
        src={img.url}
      />
        {heartIcon()}
        {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className : PropTypes.string,
  img : PropTypes.shape({
    id : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    isFavorite : PropTypes.bool
  })
}

// # Challenge
// Make it so clicking the little shopping cart icon on the image removes the item from the cart