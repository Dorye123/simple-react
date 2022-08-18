import React from 'react';
import './body.css';

export default function Body() {
    return (
        <div className='Body'>
            <RegularStairs />
            <CircleStairs />
        </div>
    )
}

function RegularStairs() {
    return (
        <img src='imgs/regular-stairs.jpg' alt='Regular stairs calculation' className='img' ></img>
    )
}

function CircleStairs() {
    return (
        <img src='imgs/circle-stairs.jpg' alt='Circle stairs calculation' className='img' ></img>
    )
}