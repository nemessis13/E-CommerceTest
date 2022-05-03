import React from 'react'
import DaysG from '../img/DaysG.jpg'
import ItemCounter from '../ItemCounter/ItemCounter'


const Card = () => {
  return (
    <div className='card ' >
        <img src={DaysG} alt="" />
        <div className="card-body">
            <h3 className='card-title'>Mi titulo</h3>
            <p className='card-text text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, error ipsa consequuntur,</p>
            <a href="#!">
                <ItemCounter/>
            </a>
        </div>
    </div>
  )
}

export default Card