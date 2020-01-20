import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import parkingReducer from './redux/ParkingReducer';

const reduxStore = createStore(parkingReducer)
test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={reduxStore}>
      <App />
    </Provider>

  );
  const linkElement = getByText(/Car In/i);
  expect(linkElement).toBeInTheDocument();
});
