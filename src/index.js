import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// import MyInfo from './components/MyInfo';
// import MyApp from './components/MyApp';

import * as serviceWorker from './serviceWorker';

// Think of components in terms of what-where-when
// Below is an example of creating an element in the DOM
// var element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
