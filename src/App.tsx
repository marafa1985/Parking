import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ICarOutParams } from './type/IParking';
import { CarIn, CarOut, ParkingAction } from './redux/ParkingAction';

import './App.scss';
import { ParkingState } from './redux/ParkingState';
import ParkingLevels from './component/ParkingLevels';
import ParkingHeader from './component/ParkingHeader';

export class App extends React.Component<StateProps & DispatchProps> {

  CarIn = () => {
    this.props.CarIn()
  }
  CarOut = (carOutParam: ICarOutParams): void => {
    this.props.CarOut({
      ...carOutParam
    })
  }

  render() {
    const { parking } = this.props.parking
    const { isFull, name } = parking
    return (
      <div className='container'>
        <ParkingHeader CarIn={this.CarIn.bind(this)} isFull={isFull} name={name} />

        <ParkingLevels parking={parking} CarOut={this.CarOut.bind(this)} />

      </div>
    )
  }
}

interface StateProps {
  parking: ParkingState
}
interface DispatchProps {
  CarIn: typeof CarIn
  CarOut: typeof CarOut
}
const mapDispatchToProps = (dispatch: Dispatch<ParkingAction>) => bindActionCreators({
  CarIn,
  CarOut
}, dispatch)

function mapStateToProps(state: ParkingState) {
  return { parking: state }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App)
