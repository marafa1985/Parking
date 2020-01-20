import React from 'react'

import { IParking, ICarOutParams } from '../type/IParking'
import ParkingSpaces from './ParkingSpaces'

interface Props {
    CarOut: (carOutParam: ICarOutParams) => void
    parking: IParking
}

const ParkingLevels: React.FC<Props> = (props) => {
    return (
        <div className='parking-level'>
            {
                props.parking.levels.map((level) => {
                    return (
                        <ParkingSpaces level={level} CarOut={props.CarOut} />
                    )
                })
            }
        </div>
    )
}

export default ParkingLevels
