import React from "react"

const Card = ({ data }) => {
  return (
    <div className='card'>
      <h4 className='card-title'>{data.title}</h4>
      <p className='card-content'>{data.content}</p>
    </div>
  )
}

export default Card
