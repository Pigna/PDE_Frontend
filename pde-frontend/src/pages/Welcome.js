import ReactDOM from 'react-dom'
import React from 'react'
function Welcome(props) {  return <h1>Hello, {props.name}</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;root.render(element);

export default Welcome;