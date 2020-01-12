import { IParking, ISpace, SpaceStatus } from "../type/IParking"

export class Praking {
    capacity: number
    parking: IParking

    constructor(capacity: number = 9 * 4, levelsCount: number = 3) {
        this.capacity = capacity
        this.parking = {
            name: 'Car Parkig',
            levels: []
        }

        for (let level = 0; level < levelsCount; level++) {
            this.parking.levels.push({
                levelsNumber: level,
                spaces: this.initLevelSpaces(capacity),
                noSpace: false
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
}