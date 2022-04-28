import React from 'react'
import Saludo from '../Greeting/Saludo'
import Cards from '../ItemList/Cards'


const ItemListcontainer = () => {
  return (
    <div className="stiloContainer">
      <div className='text-center text-secondary bg-light'>
        <Saludo persona="Diomar" />
        <Cards />
    </div>
    </div>

  )
}

export default ItemListcontainer