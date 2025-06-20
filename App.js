import React from 'react';
import ReactDOM from 'react-dom/client';
//creating a react element using React.createElement(CORE REACT)
const heading=React.createElement("h1",{id:"heading"},"hello world ");
//creating a react element using JSX
//jsx is not html in js.it is a html like syntax that gets converted to React.createElement calls
const jsxHeading=<h1 id='heading'>Hello world from JSX</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
//React element using jsx in multiple lines
const jsxHeading2=(
    <h1 id='heading'>
        Hello world from JSX in multiple lines
    </h1>
);
root.render(jsxHeading2);
//React element using jsx with attributes
const jsxHeading3=(
  <h1 id='heading' className='heading-class' style={{color:'red',fontSize:'50px'}}>
    Hello world from JSX with attributes
  </h1>
);
root.render(jsxHeading3);
//React element using jsx with children
const jsxHeading4=(
  <h1 id='heading' className='heading-class' style={{color:'red',fontSize:'50px'}}>
    Hello world from JSX with children
    <span>this is a child element</span>
  </h1>
);
root.render(jsxHeading4);
//React functional component
const Heading = () =>{
  return <h1 id="heading">React functional component</h1>
}
root.render(<Heading/>);
//React functional componet without return
const Heading2 = () => <h1 id="heading">React functional component without return</h1>;
root.render(<Heading2/>);
//React functional component with nested elements
const Heading3 = () => (
  <h1 id="heading">
    React functional component with nested elements
    <span>This is a child element</span>
  </h1>
);
root.render(<Heading3/>);
//React component composition
const Heading4 = () => (
  <div className='heading-container'>
    <Heading/>//react functional component
    <Heading2/>//react functional component without return
  </div>
);
root.render(<Heading4/>);
//placing react element inside the react element
//nested react element
const title=<h1 id='title'>I am react element</h1>;
const element=(
  <div className='element-container'>
    {title}
    <p>Above react element present inside the react element</p>
  </div>
);
const root2=ReactDOM.createRoot(document.getElementById("root2"));

root2.render(element);
//React element inside the react functional component
const ElementComponent=()=>(
  <div className='container'>
    {element}
    <h2>This is a react functional component with react element inside it</h2>
  </div>
)
root2.render(<ElementComponent/>);