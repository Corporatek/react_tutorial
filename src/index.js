import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import MyInfo from './MyInfo';

import * as serviceWorker from './serviceWorker';


// Think of components in terms of where-what-when

// var element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');

// function MyApp() {
//     return (
//         <div>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//         </div>    
//     )
// }


// Parameters for .render function is (What do I want to load?, where do I want to load it?)
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(<MyInfo />, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
