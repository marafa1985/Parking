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
    noSpace: boolean
}

export interface IParking {
    levels: ILevel[]
    name: string
}