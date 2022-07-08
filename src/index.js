import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.js'
// To import something specific: import Car from './Car.js';

// const container = document.getElementById('root');
// ReactDOM.render(<App />,container)

const root = ReactDom.createRoot(document.getElementById('root'));
// Instead of the above and "root.render", we can use this: 
// ReactDOM.render(testTableElement, document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>// https://reactjs.org/docs/strict-mode.html
);
