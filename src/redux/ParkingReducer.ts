import { ParkingAction, ParkingActionType } from "./ParkingAction";
import { ParkingState } from './ParkingState'
import { Parking } from "../model/Parking";

const defaultInit: ParkingState = {
    parking: new Parking()
}
const parkingReducer = (initState: ParkingState = defaultInit, action: ParkingAction) => {
    switch (action.type) {
        case ParkingActionType.CAR_IN:
            return { ...initState.parking.carIn() }
        case ParkingActionType.CAR_OUT:
            return {
                ...initState.parking.carOut(action.payload.levelsNumber,
                    action.payload.space)
            }
    }
    return initState
}


export default parkingReducer;