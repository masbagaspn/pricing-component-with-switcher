import React from 'react'

function ToggleComponent({handleChange, checked, onClick}) {
  return (
    <div className='toggle-container'>
      <div className='toggle-btn' 
        onClick={onClick} 
        style={checked ? {transform: 'translateX(1.5rem)'} : {transform: 'translateX(0)'}}
      ></div>
    </div>
  )
}

export default ToggleComponent;