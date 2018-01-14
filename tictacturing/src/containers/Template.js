import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()
class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton 
          onTouchTap={()=>{console.log('hello i work')}}
          label={'Test'}
          primary={true}
        />
      <div>
        <header>
          <h1>TicTacTuring</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
      </MuiThemeProvider>
    )
  }
}
export default Template
