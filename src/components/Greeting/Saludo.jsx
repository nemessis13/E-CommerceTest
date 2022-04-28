import React, { Fragment } from 'react'

const Saludo = (props) => {
  console.log(props)
  return (
    <Fragment clas>
      <h2 className='p-2'>Hola! {props.persona}</h2>
    </Fragment>
  )
}

export default Saludo