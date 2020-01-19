export enum SpaceStatus {
    EMPTY = 'EMPTY',
    OCCUPIED = 'OCCUPIED'
}
export interface ISpace {
    id: number,
    status: SpaceStatus
}

export interface ILevel {
    levelsNumber: number,
    spaces: ISpace[],
    availableSpaces: number
}

export interface ICarOutParams {
    levelsNumber: number,
    space: ISpace
}
export interface IParking {
    levels: ILevel[]
    name: string
    isFull: boolean
}

