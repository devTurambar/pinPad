import React from 'react'
import '../style/Pad.css'
import Row from './Row'

function Pad({rows}){
    return(
        <div className="pad-container">
            {
                rows.map((row) => {
                    return(
                    <Row key={row.join("")} row={row}>
                    </Row>
                    )
                })
            }  
        </div>
    )
}

export default Pad;