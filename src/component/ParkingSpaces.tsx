import * as React from 'react';
import Car from '../car.svg'
import { ILevel, SpaceStatus, ICarOutParams } from '../type/IParking';

export interface IProps {
    level: ILevel
    CarOut: (carOutParam: ICarOutParams) => void
}

const ParkingSpaces: React.FC<IProps> = (props) => {
    const { level } = props
    return (
        <div key={level.levelsNumber} className='level'>
            <div className='level-area'>
                <h3 className={level.availableSpaces === 0 ? 'danger' : ''}>{`Level: ${(level.levelsNumber + 1)}`}</h3>
                <div className='spaces-area'>
                    {level.spaces.map((space) => {
                        return (
                            <div key={space.id} >
                                {space.status === SpaceStatus.EMPTY ? '| P' + (space.id + 1) + ' |' :
                                    <img src={Car} alt={level.levelsNumber + '-' + space.id}
                                        onClick={e => props.CarOut({
                                            levelsNumber: level.levelsNumber,
                                            space: space
                                        })}></img>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ParkingSpaces
