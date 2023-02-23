import React from 'react'
import '../style/Pad.css'
import Button from './Button'

function Pad({row}){
    return(
        <>
            {row.map((e) => {
                return(
                    <Button key={e} button={e}>
                    </Button>
                )
            })}
        </>
    )
}

export default Pad;