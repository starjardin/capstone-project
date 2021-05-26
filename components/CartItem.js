import React, { useContext, useState } from 'react'
import { Context } from '../contexct/useContext'
import useHover from '../hook/useHover'

export default function CartItem({ item }) {
  const { removePhotosFromCart } = useContext(Context)
  const { isHovered, hoverRef } = useContext(useHover)
  // const [ isHovered, setIsHovered ] = useState(false)

  // function mouseHover () {
  //   setIsHovered(true)
  // }

  // function mouseLeave () {
  //   setIsHovered(false)
  // }

  const iconClassName = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

  return (
    <div className='cart-item'>
      <i
        className={iconClassName}
        onClick={() => removePhotosFromCart(item.id)}
        // onMouseEnter={mouseHover}
        // onMouseLeave={mouseLeave}
        ref={hoverRef}></i>
      <img src={item.url} width='130px' />
      <p>$5.99</p>
    </div>
  )
}

// CartItem.propTypes = {
//   item: PropTypes.shape({
//     url: PropTypes.string.isRequired
//   })
// }
