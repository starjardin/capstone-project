import React, { useState, useEffect } from 'react'

const Context = React.createContext()

const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

function ContextProvider (props) {
  const [ allPhotos, setAllPhotos ] = useState([])
  const [ cartItems, setCartItems ] = useState([])
  const getPhotos = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setAllPhotos(data)
  }

  useEffect (() => {
    localStorage.setItem("allPhotos", JSON.stringify(allPhotos))
  }, [])

  useEffect (() => {
    const photos = JSON.parse(localStorage.getItem("allPhotos"))
    if (photos.length) {
      setAllPhotos(photos)
    } else {
      setAllPhotos(allPhotos)
    }
  }, [])

  useEffect (() => {
    const cartItemsFavorited = JSON.parse(localStorage.getItem("cartItems"))
    if (cartItemsFavorited.length) {
      setCartItems(cartItemsFavorited)
    } else {
      setCartItems(cartItems)
    }
  }, [])

  useEffect (() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect (() => {
    getPhotos()
  }, [])

  function toggleFavorite (id) {
    const newPhotosArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite : !photo.isFavorite
        }
      }
      return photo
    })
    setAllPhotos(newPhotosArr)
  }

  function addPhotosToCart (newCartItimes) {
    setCartItems(prevItems => [...prevItems, newCartItimes])
  }

  function removePhotosFromCart (imgId) {
    setCartItems(prevItems => prevItems.filter(photo =>  photo.id !== imgId))
  }

  function emptyCart () {
      setCartItems([])
  }

  return (
      <Context.Provider
        value={{
          allPhotos,
          toggleFavorite,
          cartItems,
          addPhotosToCart,
          removePhotosFromCart,
          emptyCart
        }}
      >
        {props.children}
      </Context.Provider>
  )
}

export { ContextProvider, Context }

// # Challenge
// Synchronize the data on the app, to localStorage.
// The logic will happen in the Context file.
// Don't forget to update the local storage everytime you update the state.
