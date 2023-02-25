import React from 'react'
import '../style/Button.css'

function Button({button}){
    return(
        <div className='button-container'>
            {button}
        </div>
    )
}
export default Button;