import React, { useState } from 'react'
const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
const GameBoard = ({onSelectSquare, activePlayerSymbol}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBorad);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGamBoard) => {
            const updatedBoard = [...prevGamBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] =  activePlayerSymbol
            return updatedBoard;
        })
        onSelectSquare();
    }
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>{row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard