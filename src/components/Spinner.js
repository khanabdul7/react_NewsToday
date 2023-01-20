import React from 'react'
import Loading from '../img/Loading.gif'

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={Loading} alt="Loading" />
    </div>
  )
}

export default Spinner;
