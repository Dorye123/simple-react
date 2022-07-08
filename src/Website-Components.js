// React Components:
// Each component is reuseable and independent.
// They are LIKE functions that return HTML code.
// https://www.w3schools.com/react/react_components.asp
// Note that the filename must start with an uppercase character.

// A class component must include the extends React.Component statement
// The component also requires a render() method, this method returns HTML
class Car extends React.Component {
  constructor() { // https://www.w3schools.com/react/react_class.asp
    super();
    this.state = {color: "red"};
  }
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
}

// In the demo-react branch there is more xomplex example of a class component.
class Button extends React.Component {
  constructor(props) { // https://www.w3schools.com/react/react_class.asp
    super(props);
  }
    render() {
      return <button>Im a {this.props.color} button</button>;
      // from "index.js": root.render(<Button color="red" />);
    }
}


// A Function component also returns HTML, and behaves much the same way as a Class component, 
// but Function components can be written using much less code, are easier to understand.
function Footer() {
    return <h1>Footer</h1>
}

function Header() {
    return <h1>Header</h1>
}

export { Button, Header, Footer }