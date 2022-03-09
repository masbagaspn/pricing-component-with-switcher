import React from 'react'
import ToggleComponent from './toggle-component';

function SectionTitle({handleChange, checked, handleClick}) {
  return (
    <div className="section-title-container">
      <h1 className="section-title">Our Pricing</h1>
      <div className="duration-container">
        <span className="duration">Annually</span>
        <ToggleComponent onClick={handleClick} checked={checked}/>
        <span className="duration">Monthly</span>
      </div>
    </div>
  )
}

export default SectionTitle;