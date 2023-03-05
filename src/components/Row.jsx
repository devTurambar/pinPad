import React from 'react'
import '../style/Row.css'
import Button from './Button'

function Row({row, clickButton2, block}){
    return(
        <div className="row-container">
            {row.map((e) => {
                return(
                    <Button key={e} button={e} clickButton3={(buttonClicked) => {clickButton2(buttonClicked)}} block={block}>
                    </Button>
                )
            })}
        </div>
    )
}

export default Row;