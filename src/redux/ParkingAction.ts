import { ICarOutParams } from "../type/IParking"

export enum ParkingActionType {
    CAR_IN = '@parking/CAR_ENTERED_PARKING',
    CAR_OUT = '@parking/CAR_LEFT_PARKING',
}

export interface CarEnteredParking {
    type: ParkingActionType.CAR_IN
}

export interface CarLeftParking {
    type: ParkingActionType.CAR_OUT
    payload: ICarOutParams
}

export type ParkingAction = CarEnteredParking | CarLeftParking

export const CarIn = (): CarEnteredParking => {
    return {
        type: ParkingActionType.CAR_IN
    }
}

export const CarOut = (data: ICarOutParams): CarLeftParking => {
    return {
        type: ParkingActionType.CAR_OUT,
        payload: data,
    }
}