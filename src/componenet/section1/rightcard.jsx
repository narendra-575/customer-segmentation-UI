import React from 'react'
import '../style.sheet/rightcard.css'
const Rightcard = (props) => {
  return (
    <div className='rightcard'>
      <img src={props.img} alt="" />
      <div className='tan'>
        <h2>{props.id}</h2>
        <div className='ban'>
          <p>{props.intro}</p>
          <button>{props.tag}</button>
        </div>
      </div>
    </div>


  )
}

export default Rightcard
