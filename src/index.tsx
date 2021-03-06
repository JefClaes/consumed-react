import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { consumedItemsReducer } from './consumeditems/reducer'
import { createHashHistory } from 'history'
import { createStore, combineReducers } from 'redux'
import { AppState } from './appState'

const rootReducer = combineReducers<AppState>({ ConsumedItemsState : consumedItemsReducer })
const store = createStore(rootReducer)

ReactDOM.render(<App store={store}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
