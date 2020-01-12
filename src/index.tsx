import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux';

import App from './App'
import { parkingReducer } from './redux/ParkingReducer';

const store = createStore(parkingReducer)
const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)