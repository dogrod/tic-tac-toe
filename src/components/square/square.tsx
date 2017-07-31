import * as React from 'react'
import './square.css'

interface SquareProps {
  value: SquareType,
  onClick: () => void
}

const Square: React.SFC<SquareProps> = (props) => {
  return (
    <button
      className="square"
      onClick={
        () => props.onClick()
      }
    >
      {props.value}
    </button>
  )
}

export default Square
