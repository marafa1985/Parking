import { IParking } from "../type/IParking";
import { ParkingAction, ParkingActionType } from "./ParkingAction";

const parkingReducer = (initState: IParking = {
    levels: [],
    name: 'Car Parking'
}, action: ParkingAction) => {
    console.log(action)
    switch (action.type) {
        case ParkingActionType.CAR_IN:
            return initState
        case ParkingActionType.CAR_OUT:
            return initState
    }
}


export default parkingReducer;