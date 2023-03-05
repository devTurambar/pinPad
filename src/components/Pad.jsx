import React from 'react'
import '../style/Pad.css'
import Row from './Row'

function Pad({rows, clickButton, block}){


    return(
        <div className="pad-container">
            {
                rows.map((row) => {
                    return(
                        <Row key={row.join("")} row={row} clickButton2={(buttonClicked) => clickButton(buttonClicked)} block={block}>
                        </Row>
                    )
                })
            }  
        </div>
    )
}

export default Pad;