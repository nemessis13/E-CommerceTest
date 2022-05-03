import React, { Fragment } from 'react'

const Saludo = (props) => {
  console.log(props)
  return (
    <Fragment key={1}>
      <h2 className='p-2'>Hola! {props.persona}</h2>
    </Fragment>
  )
}

export default Saludo