import { ISpace } from "../type/IParking"

export enum ParkingActionType {
    CAR_IN = 'CAR_ENTERED_PARKING',
    CAR_OUT = 'CAR_LEFT_PARKING',
}

export interface CarEnteredParking {
    type: ParkingActionType.CAR_IN
    payload: ISpace
}

export interface CarLeftParking {
    type: ParkingActionType.CAR_OUT
    payload?: ISpace
}

export type ParkingAction = CarEnteredParking | CarLeftParking

export const CarIn = (space: ISpace): CarEnteredParking => {
    return {
        type: ParkingActionType.CAR_IN,
        payload: space,
    }
}

export const CarOut = (space: ISpace): CarLeftParking => {
    return {
        type: ParkingActionType.CAR_OUT,
        payload: space,
    }
}