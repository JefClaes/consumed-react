import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Overview from './components/Overview'
import { Provider, connect } from 'react-redux'
import { Store } from 'redux'
import { AppState } from './appState'
import { Container } from 'react-bootstrap'

interface Props {
  store : Store<AppState>
}

class App extends Component<Props> {
  constructor (props : Props) {
    super(props);
  }

  render() {
    return (
      <Container>
          <Provider store={this.props.store}>
            <Router>
              <div>
                <Route exact path="/" component={Overview}/>        
              </div>
            </Router>
          </Provider>
      </Container>
    
    );
  }
}

export default App;
