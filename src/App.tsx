import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IParking, SpaceStatus } from './type/IParking';
import { CarIn, CarOut, ParkingAction } from './redux/ParkingAction';

import './App.scss';

export class App extends React.Component<StateProps & DispatchProps> {

  render() {
    return (
      <div>
        <button onClick={e => {
          this.props.CarIn()
        }}>CarIn</button>
        <button onClick={e => {
          this.props.CarOut({
            levelsNumber: 0,
            space: {
              id: 0,
              status: SpaceStatus.EMPTY
            }
          })
        }}>CarOut</button>
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
