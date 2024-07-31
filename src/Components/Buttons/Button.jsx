import React from 'react'
import "./Button.css"

export const Button = ({onClickVal}) => {
  
 const buttons = ['*','-','/','.','+','1','2','3','4','5','6','7','8','9','=','C','0'];  

  return (
    <>
    <div className="buttonContainer">
    {buttons.map((buttonName)=>{ return <button className='btn' onClick={(e)=>onClickVal(buttonName)}>{buttonName}</button>})}
    </div>    
    </>
  )
}
