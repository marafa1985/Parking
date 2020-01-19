import { ParkingAction, ParkingActionType } from "./ParkingAction";
import { ParkingState } from './ParkingState'
import { Parking } from "../model/Parking";

const defaultInit: ParkingState = {
    parking: new Parking()
}
const parkingReducer = (initState: ParkingState = defaultInit, action: ParkingAction) => {
    console.log(initState)
    switch (action.type) {
        case ParkingActionType.CAR_IN:
            return { ...initState.parking.CarIn() }
        case ParkingActionType.CAR_OUT:
            return {
                ...initState.parking.CarOut(action.payload.levelsNumber,
                    action.payload.space)
            }
    }
}


export default parkingReducer;