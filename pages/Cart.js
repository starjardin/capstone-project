import React, { useContext, useState } from 'react'
import CartItem from '../components/CartItem'
import { Context } from '../contexct/useContext'

function Cart() {
  const { cartItems, emptyCart } = useContext(Context)
  const [buttonText, setButtonText] = useState('Place order')

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  const handleOrder = async () => {
    setButtonText('Ordering...')
    setTimeout(() => {
      setButtonText('Place order')
      emptyCart()
    }, 3000)
  }

  const totlaCost = (cartItemElements.length * 5.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'URO',
  })
  return (
    <main className='cart-page'>
      {cartItemElements}
      <p className='total-cost'>Total : {totlaCost}</p>
      <div className='order-button'>
        {cartItems.length > 0 ? (
          <button onClick={handleOrder}>{buttonText}</button>
        ) : (
          <p>You have no icons in the cart</p>
        )}
      </div>
    </main>
  )
}

export default Cart
