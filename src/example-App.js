// import React from 'react';
// import ReactDOM from 'react-dom/client';

// Here Im using React with JSX 
// Function's names are : 
//" JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods." 
// "JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element."

const testTableElement = (
<table>
    <tr>
    <th>Name</th>
    </tr>
    <tr>
    <td>John</td>
    </tr>
    <tr>
    <td>Elsa</td>
    </tr>
</table>
);

const listElement = (
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
</ul>
);

// when there are more than one element we need to use a Top Level element such as div to present them together.  
const moreThanOneElement = (
<div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
</div>
);


// Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
// A fragment looks like an empty HTML tag: <></>.
const usingFragmentForMultipleElements = (
<>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
</>
);

// JSX follows the rules of XML so if input will not have  "/" at the end, there will be a syntax error.
const elementsWithoutCloseCreatesProblems = <input type="text" />;