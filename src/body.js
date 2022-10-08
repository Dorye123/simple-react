import React from 'react';
import './body.css';

export default function WebsiteBody() {
    return (
        <div className='row'>
            <IntroductionText/>
            <Images />
        </div>
    )
}

function Images() {
    return (
        <div>
            <RegularStairs/>
            <CircluarStairs/>
        </div>
    )
}

function RegularStairs() {
    return (
        // I can refactor this to be an image with onclick instead of a button
        <button onClick={event =>  window.location.href='regularStairs.html'} className='image regular'></button>
    )
}

function CircluarStairs() {
    return (
        // I can refactor this to be an image with onclick instead of a button
        <button onclick={event =>  window.location.href='circleStairs.html'} className='image circluar'></button>
    )
}

function IntroductionText() {
    return (
        <div className='IntroductionText'>
            <h1>Welcome to Advanced Stairs Calculator</h1>
            <p>Our calculators are programmed for internal designers and architects that require high level stairs calculation.</p>
        </div>
    )
}