import React, { Component } from 'react'
import { Card, TextInput } from 'belle'

import { mainContainer, rootBox, outputCard, pageFooter } from './App.css'
import translate from './utils/translate'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: 'SOS',
      output: translate('SOS')
    }
    this.doTranslate = this.doTranslate.bind(this)
  }

  render () {
    return (
      <div className={mainContainer}>
        <div className={rootBox}>
          <TextInput
            value={this.state.input}
            allowNewLine
            onUpdate={this.doTranslate} />
          <Card className={outputCard}>{this.state.output}</Card>
        </div>
        <span>
          &copy; 2016 Fahad Hossain. CC-BY-SA-4.0
        </span>
      </div>
    )
  }

  doTranslate ({value}) {
    this.setState({
      input: value,
      output: translate(value)
    })
  }

}

export default App
