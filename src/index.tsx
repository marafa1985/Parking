import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import parkingReducer from './redux/ParkingReducer';
import App from './App'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
    parkingReducer,
    composeEnhancers()
);
const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    rootElement
)