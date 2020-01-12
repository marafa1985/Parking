export enum SpaceStatus {
    EMPTY = 'EMPTY',
    OCCUPIED = 'OCCUPIED'
}
export interface Space {
    id: number,
    status: SpaceStatus
}

export interface Level {
    levelsNumber: number,
    spaces: Space[],
    noSpace: boolean
}

export interface Parking {
    levels: Level[]
    name: string
}