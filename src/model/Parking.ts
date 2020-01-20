import { IParking, ISpace, SpaceStatus, ILevel } from "../type/IParking"
import { ParkingState } from "../redux/ParkingState"

export class Parking implements IParking {
    capacity: number
    isFull: boolean
    name: string = 'Car Parking'
    levels: ILevel[]
    constructor(capacity: number = 9 * 4, levelsCount: number = 3) {
        this.capacity = capacity
        this.isFull = false
        this.name = 'Car Parking'
        this.levels = []

        for (let level = 0; level < levelsCount; level++) {
            this.levels.push({
                levelsNumber: level,
                spaces: this.initLevelSpaces(capacity),
                availableSpaces: capacity
            })
        }
    }

    public initLevelSpaces(capacity: number): ISpace[] {
        const spaces: ISpace[] = []
        for (let space = 0; space < capacity; space++) {
            spaces.push({
                id: space,
                status: SpaceStatus.EMPTY
            })
        }
        return spaces
    }
    /**
     * CarIn
     */
    public carIn(): ParkingState {
        //check if there is a free spaces in the parking
        if (this.levels.filter((level) => level.availableSpaces > 0).length === 0) {
            this.isFull = true
            return { parking: this }
        }
        // Take a Copy of current Level to prevent mutation
        const currentLevels = [...this.levels]
        // Sort Level Based on Number
        const getSpaceByLevel = this.levels.sort((level) => level.levelsNumber)
            .filter((level) => level.availableSpaces > 0)[0]

        let EmptySpaceFound: boolean = false
        // Search for Empty Space and return new Spaces array
        const newLevelSpaces = getSpaceByLevel.spaces.sort((space) => space.id).map((space) => {
            if (EmptySpaceFound === false && space.status === SpaceStatus.EMPTY) {
                EmptySpaceFound = true
                return { ...space, status: SpaceStatus.OCCUPIED }
            }
            return space
        })
        // return new Level Arrays to 
        const newLevels: ILevel[] = currentLevels.map((level) => {
            if (level.levelsNumber === getSpaceByLevel.levelsNumber) {
                return {
                    levelsNumber: getSpaceByLevel.levelsNumber,
                    spaces: newLevelSpaces,
                    availableSpaces: getSpaceByLevel.availableSpaces - 1
                }
            }
            return level
        })
        this.levels = [...newLevels]
        if (this.levels.filter((level) => level.availableSpaces > 0).length === 0) {
            this.isFull = true
        }
        // return new State 
        return { parking: this }
    }

    public carOut(targetLevelId: number, targetSpace: ISpace): ParkingState {
        // Take a Copy of current Level to prevent mutation
        const currentLevels = [...this.levels]
        // Sort Level Based on Number
        const targetLevel = this.levels.filter((level) => level.levelsNumber === targetLevelId)[0]
        const newLevelSpaces = targetLevel.spaces.map((space) => {
            if (space.id === targetSpace.id) {
                targetLevel.availableSpaces = targetLevel.availableSpaces + 1
                return { ...space, status: SpaceStatus.EMPTY }
            }
            return space
        })

        const newLevels: ILevel[] = currentLevels.map((level) => {
            if (level.levelsNumber === targetLevel.levelsNumber) {
                return {
                    levelsNumber: targetLevel.levelsNumber,
                    spaces: newLevelSpaces,
                    availableSpaces: targetLevel.availableSpaces + 1
                }
            }
            return level
        })
        this.levels = [...newLevels]

        // return new State 
        this.isFull = false
        return { parking: this }
    }
}