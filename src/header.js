import React from 'react';
import './header.css';

export default function Header() {
    return (
        <Navbar/>
    )
}

function ListOfTerminology() {
    return (
        // instead of p element use detail and for the data about each we will have a summary element https://dev.to/ruppysuppy/7-cool-html-elements-nobody-uses-330c
        // use sosiv.io website as an example
        <div className='TerminologyDiv'>
            <ul> 
                <li>
                    <p className="TerminationsText">Rise and Tread</p>
                    <RiseAndTread/>
                    </li>
                <li>
                    <p className="TerminationsText">Podest</p>
                    <Podest/>
                    </li>
                <li>
                    <p className="TerminationsText">Regulations</p>
                    <Regulations/>
                    </li>
            </ul>
        </div>
    )
}

function RiseAndTread() {
    return (
        // could put here div, but currently will not. Div could be use to create the box and around the text.
        <pre className='hiddenText' >
            Run - The height of the ascent to the next step.
            Tread - The depth of the next step to allow proper and safe footing.
        </pre>
    )
}

function Podest() {
    return (
        <pre className='hiddenText' >
            Podest is a step on which you can "rest" when climbing the stairs.
        </pre>
    )
}

function Regulations() {
    return (
        <pre className='hiddenText' >
            Israely regulations - 
            American regulations - 
        </pre>
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