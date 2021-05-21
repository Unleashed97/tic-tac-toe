import React from 'react'

import Cell from './Cell'



const handleClickCell = ()=>{

}

const Board = ({cells, click}) => {
    return (
        <div className="board">
            {
                cells.map((cell, index) =>(
                    <Cell key={index} value={cell} onClick={()=> click(index)} />
                ))
            }
        </div>
    )
}

export default Board
