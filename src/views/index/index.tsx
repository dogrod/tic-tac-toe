import * as React from 'react'
import './index.css'

import Game from '../../components/game/game'

class Index extends React.Component<{}, {}> {

  render(): JSX.Element {
    return (
      <div className="index">
        <Game />
      </div>
    )
  }
}

export default Index