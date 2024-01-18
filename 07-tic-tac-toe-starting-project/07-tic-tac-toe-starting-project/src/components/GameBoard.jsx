
const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
const GameBoard = ({onSelectSquare, turns}) => {
    let gameBoard = initialGameBorad;

    for(const turn of turns) {
        const {square, player} = turn;
        const { row, col} = square;

        gameBoard[row][col] = player;

    
    }
   // const [gameBoard, setGameBoard] = useState(initialGameBorad);

   // function handleSelectSquare(rowIndex, colIndex) {
     //   setGameBoard((prevGamBoard) => {
       //     const updatedBoard = [...prevGamBoard.map(innerArray => [...innerArray])];
         //   updatedBoard[rowIndex][colIndex] =  activePlayerSymbol
          //  return updatedBoard;
       // })
       // onSelectSquare();
    //}
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>{row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard