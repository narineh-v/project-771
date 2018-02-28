import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Router } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
