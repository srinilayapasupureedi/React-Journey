const heading=React.createElement('h1',{id:"heading"}, 'Hello, World from React!');
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

const heading2=React.createElement("div",{class:"parent"},
              React.createElement("div",{class:"child"},
              [
              React.createElement("h1",{id:"heading2"}, 'Hello, World from h1!'),
              React.createElement("h2",{id:"heading2"}, 'Hello, World from h2!')
              ])
);
const  root2=ReactDOM.createRoot(document.getElementById('root2'));
root2.render(heading2);