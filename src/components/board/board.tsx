import * as React from 'react'
import Square from '../square/square'

type squareType = string | null

interface BoardProps {
  squares: Array<squareType>,
  onClick: Function
}

interface State {
  squares: Array<squareType>,
  xIsNext: boolean
}

export default class Board extends React.Component<BoardProps, State> {
  state: State = {
    squares: Array(9).fill(null),
    xIsNext: true
  }

  // returns a square function
  renderSquare(i: number): JSX.Element {
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render(): JSX.Element {
    return (
      <div>
        <div className="board__row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board__row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board__row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}