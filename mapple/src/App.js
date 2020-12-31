import React, { Component } from 'react'
import './App.css'
import Circ from './Circ'

class App extends Component {
  render() {
    return (
        <div>
          <Circ size={[500, 500]} />
        </div>
    )
  }
}

export default App;
