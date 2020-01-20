import React from 'react'

interface Props {
    CarIn: () => void
    isFull: boolean
    name: string
}

const ParkingHeader: React.FC<Props> = (props) => {
    return (
        <div>
            <div className={'title' + (props.isFull && ' danger')} ><h1>{props.name}
                {props.isFull && ' is full'}</h1></div>
            <div className='action-buttons'>
                <button onClick={e => { props.CarIn() }}>Car In</button>
                <p><strong>!Click on the car image to leave the parking!</strong> </p>
            </div>
        </div>
    )
}

export default ParkingHeader
