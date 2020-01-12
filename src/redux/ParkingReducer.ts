import { Parking } from "../type/Parking";
import { ParkingAction, ParkingActionType } from "./ParkingAction";

export const parkingReducer = (initState: Parking = {
    levels:[],
    name:'Car Parking'
}, action: ParkingAction) => {
    console.log(action)
    switch (action.type) {
        case ParkingActionType.CAR_IN:
            return initState
        case ParkingActionType.CAR_OUT:
            return initState
    }
}
