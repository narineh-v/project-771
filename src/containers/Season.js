import React , {Component}  from 'react';

import './App.scss';
// Components
import Winter from '../components/Winter';
import Spring from '../components/Spring';
import Summer from '../components/Summer';
import Autumn from '../components/Autumn';



class Season extends Component {
  constructor(props){
    console.log("season");
    super(props);
    this.state = {season: 1};
  }

  componentWillMount(){
    this._setInterval = setInterval(()=>{
      console.log(this.state.season);
      if(this.state.season < 4){
        let temp = this.state.season;
        temp++;
        this.setState({
          season: temp
        });
      }
      else{
        this.setState({
          season: 1
        });
      }
    },7000);
  }

  componentWillUnmount(){
    clearInterval(this._setInterval);
  }

  render(){
    console.log(this.state.season);
    return(<div>
      {this.state.season == 1 && <Winter/>}
      {this.state.season == 2 && <Spring/>}
      {this.state.season == 3 && <Summer/>}
      {this.state.season == 4 && <Autumn/>}
      </div>);
  };
}

export default Season;
