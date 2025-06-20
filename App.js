import React from 'react';
import ReactDOM from 'react-dom/client';
const heading=React.createElement('h1',{id:"heading"}, 'Hello, World from React!');
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

const heading2 = React.createElement("div", { className: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", { id: "heading2-h1", key: "h1" }, 'Hell, World from h1!'),
    React.createElement("h2", { id: "heading3", key: "h2" }, 'Hello, World from h2 and Nilaya!')
  ])
);

const  root2=ReactDOM.createRoot(document.getElementById('root2'));
root2.render(heading2);
