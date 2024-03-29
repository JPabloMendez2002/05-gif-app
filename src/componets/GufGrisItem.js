import React from 'react'

const GufGrisItem = ( {id, title, url} ) => {

  return (
    <div className="card animate__fadeIn">
        <img src={url} alt={title}  />
        <p>{title}</p>
    </div>
  )
}

export default GufGrisItem
