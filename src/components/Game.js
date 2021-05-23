import React, {useState} from 'react'

import Board from './Board'

import {calculateWinner} from '../helper'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))

    const [xIsNext, setXIsNext] = useState(true);

    const [score, setScore] = useState(0);

    const winner = calculateWinner(board);

    const handleCellClick = (index)=>{
        const boardCopy = [...board];

        if(winner || boardCopy[index]) return

        boardCopy[index] = xIsNext ? 'X' : 'O'

        setBoard(boardCopy)

        setXIsNext(!xIsNext);
    }

    // const score = () =>{
    //     return (
    //         <p></p>
    //     )
    // }

    const startNewGame = ()=>{
        return (
            <button className="btn btn--start" onClick={() => setBoard(Array(9).fill(null))}>Start new game</button>
        )
    }

    return (
        <div className="game">
            <div className="score">
                {/* { score() } */}
                { startNewGame() }
            </div>
            <Board cells={board} click={handleCellClick}/>
            <p className="game__info">
                {
                    winner ? 'Winner is ' + winner : 'Next move is ' + (xIsNext ? 'X' : 'O')
                }
            </p>
        </div>
    )
}

export default Game
