import * as React from 'react'
import Square from '../square/square'

interface BoardProps {
  squares: SquareType[][],
  onClick?: (i: number) => void
}

const Board: React.SFC<BoardProps> = (props) => {
  // returns a square function
  // const renderSquare = (i: number) => {
  //   return (
  //     <Square 
  //       value={props.squares[i]} 
  //       onClick={() => {
  //         if (!props.onClick) {
  //           return
  //         }
  //         props.onClick(i)
  //       }}
  //     />
  //   )
  // }

  const renderRow = (row: SquareType[]) => {
    const rowElement = row.map((square, squareIndex) => {
      return (
        <Square 
         key={squareIndex}
         value={square} 
         onClick={() => {
           if (!props.onClick) {
             return
           }
           props.onClick(squareIndex)
         }}
        />
      )
    })
    return rowElement
  }

  const renderBoard = props.squares.map((row, rowIndex): JSX.Element => {
    return (
      <div className="board__row" key={rowIndex}>
        {renderRow(row)}
      </div>
    )
  })

  return (
    <div>
      {renderBoard}
      {/* <div className="board__row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board__row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board__row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div> */}
    </div>
  )
}

export default Board