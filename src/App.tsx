import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IParking } from './type/IParking';
import { CarIn, CarOut, ParkingAction } from './redux/ParkingAction';

import './App.scss';

export class App extends React.Component<StateProps & DispatchProps> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

interface StateProps {
  parking: IParking
}
interface DispatchProps {
  CarIn: typeof CarIn
  CarOut: typeof CarOut
}
const mapDispatchToProps = (dispatch: Dispatch<ParkingAction>) => bindActionCreators({
  CarIn,
  CarOut
}, dispatch)

function mapStateToProps(state: IParking) {
  return { parking: state }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App)
