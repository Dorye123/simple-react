import React from 'react';
import './footer.css';


export default function Footer() {
    return (
        <div className='Footer'>
            <h1>Footer</h1>
            <FooterLanguage />
            <FooterEmailBox />
        </div>
    )
}

function FooterLanguage() {
    return (
        <div className='Language'>
            <pre className=''>{languages[1]}</pre>
        </div>
    )
}

function FooterEmailBox() {
    return (
        <div className='EmailBox'>
            <pre className='EmailText'>{emailAddress}</pre>
        </div> 
    )
}


const emailAddress = "a.stairs.clac@gmail.com";
const languages = [ "Hebrew", "English", "עברית", "אנגלית" ]