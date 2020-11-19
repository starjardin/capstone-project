import React, { useContext } from 'react'
import { Context } from '../contexct/useContext'
import { getClass } from '../utils/index'
import Image from '../components/Image'

function Photos() {
  const { allPhotos } = useContext(Context)
  const image = allPhotos.map((photo, index )=> (
    <Image key={index} className={getClass(index)} img={photo}/>)
  )

	return (
		<main className="photos">
      {image}
		</main>
	)
}

export default Photos
