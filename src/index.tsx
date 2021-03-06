import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Index from './views/index/index'

ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
