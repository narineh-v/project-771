import React, { Component } from 'react';
// import { Router, Route, IndexRoute} from 'react-router';
import { Route , BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";


//import createBrowserHistory from 'history/createBrowserHistory';
import './App.scss';

// Components


import Seasons from '../components/Seasons';
import PageOne from '../components/PageOne/PageOne';
import PageTwo from '../components/PageTwo/PageTwo';

import Aux from '../hoc/Auxx';


//const history = createBrowserHistory();
const history = createHistory(this.props);
class App extends Component {
  state = {
    components: [
      {path: '/', name: Seasons},
      {path: '/page_two', name: PageTwo}
    ]
  };

  componentDidMount() {
    //setInterval(Timer, 7000);
  }

  render() {
      let components = this.state.components;
      let routes = (
        <Aux>
          {components.map((component,key) => {
            return (
              <Route exact key = {key} path = {component.path} component = {component.name}/>
            )
          })}
        </Aux>
      )

    return (
      <Router history={this.history} >
        <Aux>
         {routes}
        </Aux>
      </Router>
    );
  }
}

export default App;
