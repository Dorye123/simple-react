import React from 'react';
import './header.css';

export default function Header() {
    return (
        <Navbar/>
    )
}

function ListOfTerminology() {
    return (
        <div className='TerminologyDiv'>
            <ul>
                <li><p className="TerminationsText">Rise and Tread</p></li>
                <li><p className="TerminationsText">Podest</p></li>
                <li><p className="TerminationsText">Regulations</p></li>
            </ul>
        </div>
    )
}

function Navbar() {
    return (
        <div className='navbar'>
            <Logo/>
            <ListOfTerminology/>
        </div>
    )
}

function Logo () { 
    return (
        // {/*Path to images is related between the index.html file or any other file to the location of the image. NOT THE CODE */}
        <img src='imgs/stairs-logo.jpg' alt={brand} className='Logo'></img>
    )
}

const brand = "Advanced Stairs Calculator"