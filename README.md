# simple-react
## What is react
React is a JavaScript **library** for building user interfaces.

React is used to build **single-page applications**.

React allows us to create **reusable UI components**.

https://www.w3schools.com/react/default.asp

## How to work with react and test it
Do `npm install react-scripts`
Then add to package.json the following "scripts" section:  
```json
"scripts": {
    "start": "./react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
```

Then create the following folder:  
`public/index.html`

Because of this:
```
surhv@Omen-laptop MINGW64 ~/Github-projects/simple-react (main)
$ npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> simple-react@1.0.0 start
> react-scripts start

Could not find a required file.
  Name: index.html
  Searched in: C:\Users\surhv\Github-projects\simple-react\public

```

In `public/index.html` file create the webpage that you want to present.  

### NOTE
In the first time that you'll be executing `npm start` which is `react-scripts start`.  
If no browser was detected , you will be asked if you would like to use the default browser. Press `Y`.  


### npm install
```bash
npm install react-scripts
npm install react
npm install react-dom

```

### Setting a debugger in vsCode for React
https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_configure-the-debugger

### Help for advanced React
https://www.freecodecamp.org/news/react-beginners-guide/

## Concepts in React
`React components` [link](https://www.w3schools.com/react/react_components.asp) are the functions and class that we are creating to reuse them.    
They are the core idea of React.  
`React Props (properties)` [link](https://www.w3schools.com/react/react_components.asp) are the way we are adding properties to the components we created which are classes and functions.  
`React Conditions` [link](https://www.w3schools.com/react/react_jsx.asp) They are happening outside of the HTML elements.  As in HTML we do not want to calculate.  
