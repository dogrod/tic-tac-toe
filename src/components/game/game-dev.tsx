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

export default class Game extends React.Component<{}, GameState> {
  public state: GameState = {
    history: [{
      squares: Array(3).fill(Array(3).fill(null))
    }],
    stepNumber: 0,
    xIsNext: true
  }

  constructor() {
    super()
  }

  public render(): JSX.Element {
    return (
      <div className="game">
        <div className="game__board">
          <Board 
            squares={this.state.history[0].squares}
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