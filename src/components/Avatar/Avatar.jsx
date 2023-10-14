import React from 'react'

function Avatar({ children, backgroundColor, px,py , color, borderRadius, fontSize, cursor }) {
  
  const style={
    backgroundColor, 
    padding: `${py} ${px}`,
    borderRadius,
    fontSize,
    color: color || 'black',
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar