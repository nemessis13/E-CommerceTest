import React from 'react'
import Card from './Card'




const Cards = () => {
  return (
    <div className="App">
        <div className='container d-flex justify-content-center'>
        <div className="row">
            <div className="col-md-4 p-2">
            <Card/>
            </div>
            <div className="col-md-4 p-2">
            <Card/>
            </div>
            <div className="col-md-4 p-2">
            <Card />
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Cards