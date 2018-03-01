import React, { Component } from 'react';
// import { Router, Route, IndexRoute} from 'react-router';
import { Route , BrowserRouter  } from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";


//import createBrowserHistory from 'history/createBrowserHistory';
import './App.scss';

// Components
// import Winter from '../components/Winter';
import Spring from '../components/Spring';
// import Summer from '../components/Summer';
// import Autumn from '../components/Autumn';
import Season from './Season';


//const history = createBrowserHistory();
const history = createHistory(this.props);
class App extends Component {
  state = {
    components: [
      {path: '/', name: Season},
      {path: '/season/test', name: Spring}
      // {path: '/summer', name: Summer},
      // {path: '/autumn', name: Autumn}
    ]
  }




  componentDidMount() {
    //setInterval(Timer, 7000);
  }

  render() {
      let components = this.state.components;
      let routes = (
        <div>
          {components.map((component,key) => {
            return <Route exact key = {key} path = {component.path} component = {component.name}/>;
          })}
        </div>
      )

    return (
      <BrowserRouter history={this.history} >
        <div>
         {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
