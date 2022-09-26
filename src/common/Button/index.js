import React from 'react'
import "./button.css"

const Button = (props) => {
    const {btnType, btnText, btnOnclick, customClass} = props;

  return (
  <div className={`${btnType==='PRIMARY'
   ? `button primary-btn ${customClass}` 
   : `button secondary-btn ${customClass}`
   }`}
    onClick={btnOnclick}
   >
    {btnText}
    </div>
    )
}

export default Button