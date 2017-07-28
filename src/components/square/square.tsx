import * as React from 'react'
import './square.css'

type squareType = string | null

interface SquareProps {
  value: squareType,
  onClick: Function
}

interface State {
  value?: squareType
}

export default class Square extends React.Component<SquareProps, State> {
  state: State = {
    value: null
  }

  constructor() {
    // super(): call the parent constructor
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
    super()
  }

  handleOnClick = () => {
    this.props.onClick()
  }

  render(): JSX.Element {
    return (
      <button
        className="square"
        onClick={this.handleOnClick}
      >
        {this.props.value}
      </button>
    )
  }
}