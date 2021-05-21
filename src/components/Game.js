import React, {useState} from 'react'

import Board from './Board'

import {calculateWinner} from '../helper'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))

    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);

    const handleCellClick = (index)=>{
        const boardCopy = [...board];

        if(winner || boardCopy[index]) return

        boardCopy[index] = xIsNext ? 'X' : 'O'

        setBoard(boardCopy)

        setXIsNext(!xIsNext);
    }

    return (
        <div className="game">
            <Board cells={board} click={handleCellClick}/>
        </div>
    )
}

export default Game
