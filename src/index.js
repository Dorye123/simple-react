import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Example for understanding rendering and showing the current date every 1 second.
// function showTime() {
//   const myElement = (
//     <div>
//       <h1>Welcome to GeeksforGeeks!</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
  
//   ReactDOM.render(
//     myElement,
//     document.getElementById("root")
//   );                   
// }
// setInterval(showTime, 1000); // 1000ms