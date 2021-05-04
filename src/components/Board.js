import React from 'react'

import Cell from './Cell'



const handleClickCell = ()=>{

}

const Board = () => {
    return (
        // <table className="board">
        //     <tbody className="board__body">
        //         <tr className="board__row">
        //             <Cell />
        //             <Cell />
        //             <Cell />
        //         </tr>
        //         <tr className="board__row">
        //             <Cell />
        //             <Cell />
        //             <Cell />
        //         </tr>
        //         <tr className="board__row">
        //             <Cell />
        //             <Cell />
        //             <Cell />
        //         </tr>
        //     </tbody>
        // </table>
        <div className="board">
            <Cell onClick={handleClickCell}/>
            <Cell onClick={handleClickCell}/>
            <Cell onClick={handleClickCell}/>
            <Cell onClick={handleClickCell}/>
            <Cell onClick={handleClickCell}/>
            <Cell onClick={handleClickCell}/>
            <Cell onClick={handleClickCell}/>
            <Cell onClick={handleClickCell}/>
            <Cell onClick={handleClickCell}/>
        </div>
    )
}

export default Board
