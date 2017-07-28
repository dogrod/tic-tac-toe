import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Index from './views/index/index'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
