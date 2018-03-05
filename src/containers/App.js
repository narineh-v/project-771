import React, { Component } from 'react';
// import { Router, Route, IndexRoute} from 'react-router';
import { Route , BrowserRouter  } from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";


//import createBrowserHistory from 'history/createBrowserHistory';
import './App.scss';

// Components
// import Winter from '../components/Winter';
//import Spring from '../components/Spring';
// import Summer from '../components/Summer';
// import Autumn from '../components/Autumn';
import Seasons from './Seasons';


//const history = createBrowserHistory();
const history = createHistory(this.props);
class App extends Component {
  state = {
    components: [
<<<<<<< HEAD
      {path: '/', name: Season},
      {path: '/season/test', name: Spring}
=======
      {path: '/', name: Seasons}
>>>>>>> e4d41733d9af305e0b2eea997603f4490d6f13db
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
