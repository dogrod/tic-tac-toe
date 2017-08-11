import * as React from 'react'
import './game.css'

import Board from '../board/board'

interface HistoryType {
  squares: SquareType[][]
}

interface GameState {
  history: HistoryType[],
  stepNumber: number,
  xIsNext: boolean,
}

const gameScale = 3

const initSquare = (scale: number) => {
  const squares = Array(scale)

  for (let index = 0; index < squares.length; index++) {
    squares[index] = Array(scale).fill(null)
  }

  return squares
}

export default class Game extends React.Component<{}, GameState> {

  public state: GameState = {
    history: [{
      squares: initSquare(gameScale)
    }],
    stepNumber: 0,
    xIsNext: true
  }

  constructor() {
    super()
  }

  /**
   * handleClick
   */
  public handleClick = (x: number, y: number) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    squares[y][x] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  public render(): JSX.Element {
    const history = this.state.history
    const current = history[this.state.stepNumber]

    const status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`

    return (
      <div className="game">
        <div className="game__board">
          <Board 
            squares={current.squares}
            onClick={
              (x, y) => this.handleClick(x, y)
            }
          />
        </div>
        <div className="game__info">
          <div>{status}</div>
          <ol>{/* move */}</ol>
        </div>
      </div>
    )
  }
}