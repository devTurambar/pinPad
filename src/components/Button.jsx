import React from 'react'
import '../style/Button.css'

function Button({button, clickButton3, block}){
    return(
        <button className='button-container' onClick={() => clickButton3(button)} disabled={block}>
            {button}
        </button>
    )
}
export default Button;