import { Space } from "../type/Parking"

export enum ParkingActionType {
    CAR_IN = 'CAR_ENTERED_PARKING',
    CAR_OUT = 'CAR_LEFT_PARKING',
}

export interface CarEnteredParking {
    type: ParkingActionType.CAR_IN
    payload: Space
}

export interface CarLeftParking {
    type: ParkingActionType.CAR_OUT
    payload: Space
}

export type ParkingAction = CarEnteredParking | CarLeftParking

export const CarIn = (space: Space): CarEnteredParking => {
    return {
        type: ParkingActionType.CAR_IN,
        payload: space,
    }
}

export const CarOut = (space: Space): CarLeftParking => {
    return {
        type: ParkingActionType.CAR_OUT,
        payload: space,
    }
}