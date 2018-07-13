import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


import Containers from './containers';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Containers />, document.getElementById('root'));



registerServiceWorker();
