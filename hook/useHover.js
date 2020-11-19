import { useState, useRef } from 'react'

export default function useHover (arguments) {
  const [hovered, setHovered] = useState(false)
  const hoverRef = useRef(null)
  
  function handleMouseEnter () {
    setHovered(true)
  }

  function handleMouseLeave () {
    setHovered(false)
  }
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