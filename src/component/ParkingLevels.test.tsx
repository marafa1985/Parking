import React from 'react';
import { render } from '@testing-library/react';
import ParkingLevels from './ParkingLevels';
import { SpaceStatus, IParking } from '../type/IParking';

test('renders learn react link', () => {
    const parking: IParking = {
        isFull: false,
        name: 'test',
        levels: [{
            availableSpaces: 6,
            levelsNumber: 0,
            spaces: [{
                id: 0,
                status: SpaceStatus.EMPTY
            }]
        }]
    }
    const { getByText } = render(

        < ParkingLevels CarOut={() => { }} parking={parking} />

    );
    const linkElement = getByText(/P1/i);
    expect(linkElement).toBeInTheDocument();
});