import { useState, useRef, useEffect } from 'react'

export default function useHover () {
  const [hovered, setHovered] = useState(false)
  const hoverRef = useRef(null)

  function handleMouseEnter () {
    setHovered(true)
  }

  function handleMouseLeave () {
    setHovered(false)
  }

  useEffect (() => {
    hoverRef.current.addEventListener("mouseenter", handleMouseEnter)
    hoverRef.current.addEventListener("mouseleave", handleMouseLeave)
    return () => {  
      hoverRef.current.removeEventListener("mouseenter", handleMouseEnter)
      hoverRef.current.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return [ hovered, hoverRef ]
}

/**
   * Challenge:
   * 
   * Using useEffect and useRef, make it so when this hook first loads,
   * it sets up the "mouseenter" and "mouseleave" event listeners on the ref.
   * 
   * Remember: the ref.current will represent the DOM node, which is where you can
   * do imperative commands like `.addEventListener` and `removeEventListener`.
*/