import React, { Component } from 'react';
// import { Router, Route, IndexRoute} from 'react-router';
import { Route ,BrowserRouter } from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";


//import createBrowserHistory from 'history/createBrowserHistory';
import './App.scss';

// Components
import Winter from '../components/Winter';
import Spring from '../components/Spring';
import Summer from '../components/Summer';
import Autumn from '../components/Autumn';
//import Spring from '../components/Spring';

//const history = createBrowserHistory();
const history = createHistory(this.props);
class App extends Component {
  render() {
    return (
      <BrowserRouter history={this.history} >
        <div>
          <Route  path = "/winter" component = {Winter} />
          <Route  path = "/spring" component = {Spring} />
          <Route  path = "/summer" component = {Summer} />
          <Route  path = "/autumn" component = {Autumn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
