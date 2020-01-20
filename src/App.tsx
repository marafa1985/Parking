import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { SpaceStatus } from './type/IParking';
import { CarIn, CarOut, ParkingAction } from './redux/ParkingAction';
import Car from './car.svg'
import './App.scss';
import { ParkingState } from './redux/ParkingState';

export class App extends React.Component<StateProps & DispatchProps> {
  render() {
    return (
      <div className='container'>
        <div>
          <div className={'title' + (this.props.parking.parking.isFull && ' danger')} ><h1>{this.props.parking.parking.name}
            {this.props.parking.parking.isFull && ' is closed'}</h1></div>
          <div className='action-buttons'>
            <button onClick={e => {
              this.props.CarIn()
            }}>Car In</button>
            <button onClick={e => {
              this.props.CarOut({
                levelsNumber: 0,
                space: {
                  id: 0,
                  status: SpaceStatus.EMPTY
                }
              })
            }}>Car Out</button>
          </div>
          <div className='parking-level'>
            {
              this.props.parking.parking.levels.map((level) => {
                return (
                  <div key={level.levelsNumber} className='level'>
                    <div className='level-area'>
                      <h3>{`Level: ${(level.levelsNumber + 1)}`}</h3>
                      <div className='spaces-area'>
                        {level.spaces.map((space) => {
                          return (
                            <div key={space.id} >
                              {space.status === SpaceStatus.EMPTY ? '| P' + (space.id + 1) + ' |' :
                                <img src={Car} alt={level.levelsNumber + '-' + space.id}
                                  onClick={e => this.props.CarOut({
                                    levelsNumber: level.levelsNumber,
                                    space: space
                                  })}></img>}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

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
