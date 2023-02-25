import React from 'react'
import '../style/Row.css'
import Button from './Button'

function Row({row}){
    return(
        <div className="row-container">
            {row.map((e) => {
                return(
                    <Button key={e} button={e}>
                    </Button>
                )
            })}
        </div>
    )
}

export default Row;