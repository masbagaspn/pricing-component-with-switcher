import React from 'react'

function ToggleComponent({handleChange, checked}) {
  if(checked){
    
  }
  return (
    <div className='toggle-container'>
        <label className="switcher">
            <input type="checkbox" 
              name="checkbox" 
              id="checkbox" 
              className='checkbox' 
              onChange={handleChange} 
              style={checked ? {transform: 'translateX(1.5rem)'} : {transform: 'translateX(0)'}}
            />
            <span className="toggle" 
            style={checked ? {transform: 'translateX(1.5rem)'} : {transform: 'translateX(0)'}}></span>
        </label>
    </div>
  )
}

export default ToggleComponent;