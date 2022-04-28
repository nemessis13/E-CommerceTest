import './ItemCounter.css'
import { FaCartPlus } from "react-icons/fa";


import React,{useState} from 'react'

export const ItemCounter = () => {
  const [count, setCount] = useState(1);

     const decrease = () => {
       setCount(count - 1);
     }

     const increase = () => {
       setCount(count + 1);
     }

  return (
    <div className='counter d-block'>

      <div className="btn">
       <button className='m-2 rounded-2' disabled={count <=1} onClick={decrease}> - </button>

         <span>{count}</span>

       <button className='m-2 rounded-2' disabled={count >= 10} onClick={increase}> + </button>
      </div>
      
      <div className='btn btn-success'>
        Agregar al carrito <FaCartPlus />
      </div>

    </div>

  )
}

export default ItemCounter;