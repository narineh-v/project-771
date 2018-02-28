import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Router } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// export default () => (
//   <BrowserRouter>
//   <App />
//     // <Router path ="/" component = {App} />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// ReactDOM.render(<BrowserRouter><Router path ="/" component = {App} /></BrowserRouter>, document.getElementById('root'));
// registerServiceWorker();
