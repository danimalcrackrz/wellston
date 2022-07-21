import React from "react"
import Card from "../components/Card.js"
import data from "./api/data.json"

const Survey = () => {
  const { types } = data
  return (
    <div className='survey'>
      <span className='survey-title'>Types of Surveying</span>
      <div className='survey-content'>
        {types.map((obj, index) => (
          <Card key={index} data={obj} />
        ))}
      </div>
    </div>
  )
}

export default Survey
