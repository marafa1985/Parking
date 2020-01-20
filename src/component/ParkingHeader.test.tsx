import React from 'react';
import { render } from '@testing-library/react';
import ParkingHeader from './ParkingHeader';

test('renders learn react link', () => {
    const { getByText } = render(
        <ParkingHeader CarIn={() => { }} isFull={false} name='test' />

    );
    const linkElement = getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    const { getByText } = render(
        <ParkingHeader CarIn={() => { }} isFull={true} name='test' />

    );
    const linkElement = getByText(/is full/i);
    expect(linkElement).toBeInTheDocument();
});
