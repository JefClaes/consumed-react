import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Overview from './Overview'
import './App.css'
import { Provider, connect } from 'react-redux'
import { Store } from 'redux'
import { ConsumedItemsState } from './ConsumedItems/Types';

interface Props {
  store : Store<ConsumedItemsState>
}

class App extends Component<Props> {
  constructor (props : Props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
      <Router>
      <div>
        <Route exact path="/" component={Overview}/>        
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
