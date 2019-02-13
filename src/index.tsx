import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { consumedItemsReducer } from './ConsumedItems/Reducer'
import { createHashHistory } from 'history'
import { createStore } from 'redux'


const store = createStore(consumedItemsReducer)

ReactDOM.render(<App store={store}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
