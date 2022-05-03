import React, { useEffect, useState } from 'react'
import Saludo from '../Greeting/Saludo'
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemList from '../ItemList/ItemList'
import Item from '../ItemList/Item'
import Cards from '../ItemList/Cards'



const ItemListcontainer = () => {

const [productos, setProductos] = useState ([])

const data = [
  {id:1, 
   nombre: "Days Gone",
   descripcion: "Video juego",
   stock: 5,
   imagen:'https://gmedia.playstation.com/is/image/SIEPDC/days-gone-standard-edition-column-image-ps4-es-ar-29jan21?$native--t$'
  },
  {id:2, 
   nombre: "Horizon zero Down",
   descripcion: "Video juego",
   stock: 10,
   imagen:'https://newlevel.com.ar/wp-content/uploads/2021/06/Horizon-Zero-Dawn-600x600.png'
  },
  {id:3, 
   nombre: "Red Dead Redemption 2",
   descripcion: "Video juego",
   stock: 10,
   imagen:'https://drakemall-files-new.s3.eu-central-1.amazonaws.com/red%20dead-cjq2k9dhm01fb01rolafnc2au.png'
  },  
]


useEffect(() => {
  const promesa = new Promise((resolve, rejet) => {
    setTimeout(() => {
      resolve(data)
    }, 2500);
  })
  
  promesa.then((res) => {
    setProductos(res)
  }).then(() => 
  console.log(productos)
  ).catch((err) =>
  console.log(err)
  )

  return () => {
    
  }
}, [])



  return (
    <div className="stiloContainer">
      <div className='text-center text-secondary bg-light'>
        <Saludo persona="usuario" />
        <ItemList productos={productos}/>
        <Cards/>
        {/* <ItemCounter/> */}
        

    </div>
    </div>

  )
}

export default ItemListcontainer