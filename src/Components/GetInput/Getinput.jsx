import React, { useState } from 'react'
import './Getinput.css'

export const Getinput = ({displayValue}) => {

  
  return (
    <div className='input' >
      <input type="text" id='display' value={displayValue} readOnly/>
    </div>
  )
}
