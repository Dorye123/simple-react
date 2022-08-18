import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div className='Header'>
            {/* <h1>Header</h1> */}
            <Terminology />
            <AboutUs />
            <Language />
            <Logo />
        </div>
    )
}

function Terminology () {
    return (
        <button className='btn-Terminology'>
            <p className='' >Terminology</p>
        </button>
    )
}

function AboutUs () {
    return (
        <button className='btn-Aboutus'>
            <p className='' >About us</p>
        </button>
    )
}

function Language () {
    return (
        <button className='btn-Language'>
            <p className='' >Language</p>
        </button>
    )
}

function Logo () {
    return (
        <div>
            {/*Path to images is related between the index.html file or any other file to the location of the image. NOT THE CODE */}
            <img src='imgs/stairs-logo.jpg' alt={brand}></img>
        </div>
    )
}

const brand = "Advanced Stairs Calculator"