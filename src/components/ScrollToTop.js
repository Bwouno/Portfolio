import React, { useEffect, useState } from "react"
import Arrow from "../images/up-arrow.svg"

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(null)
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <button
      type="button"
      onClick={scrollTop}
      style={{
        display: showScroll ? "block" : "none",
        width: 50,
        height: 50,
        position: "fixed",
        right: 40,
        bottom: 40,
        zIndex: 1000,
        cursor: "pointer",
        backgroundColor: "transparent",
        transition: "transform 200ms",
        "&:hover, &:focus-visible": {
          transform: "scale(1.1)",
        },
      }}
    >
      <img
        style={{
          width: 50,
          height: 50,
          zIndex: 1000,
        }}
        src={Arrow}
        alt="flêche vers le haut"
      />
    </button>
  )
}
export default ScrollToTop
