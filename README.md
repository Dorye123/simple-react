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


