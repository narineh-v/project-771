import React , {Component}  from 'react';
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
//import { CSSTransitionGroup } from 'react-transition-group'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './App.scss';

// Components
import Season from '../components/Season';


class Seasons extends Component {

    state = {
      count: 0,
      showSeason: false,
      seasons: ['autumn', 'winter', 'spring', 'summer'],
      songs: [],
      playing: true
    };

  componentDidMount() {
    //var audio =  new Audio();
    //audio.src = "../assets/sounds/ocean-sound.mp3"
  }
  componentWillMount() {
    this._setInterval = setInterval(() => {
      //console.log(this.state.count);
      if(this.state.count < 3){
        let temp = this.state.count;
        temp++;
        this.setState({
          count: temp
        });
      }
      else{
        this.setState({
          count: 0
        });
      }
    },7000);
  }

  componentWillUnmount(){
    clearInterval(this._setInterval);
  }


  togglePlay = (event) => {
    let audio = document.getElementsByClassName('audioTag')[0];
    //let audio = this.state.audio;
    let playing = this.state.playing;
    console.log(audio)

    if(playing == true) {console.log('pause');
    audio.pause();
  }
    else {console.log('play');
    audio.play();
  }
      this.setState({ playing: !playing });
    //audio.src = this.state.songs[this.props.song];

  }

  render() {
    return (
      <div>
          {this.state.seasons.map((season, index) => {
            let showSeason = this.state.showSeason;
            let prevIndex = index == 0 ? 3 : index - 1;
            let seas = this.state.seasons[prevIndex];
            // var previous=array[i==0?array.length-1:i-1];
            // var current=array[i];
            // var next=array[i==array.length-1?0:i+1];
            // prevIndex = array[i==0?array.length-1:i-1];
            //console.log(index);
            if(index == this.state.count) {

              // <CSSTransitionGroup
              //   transitionName="example"
              //   transitionEnterTimeout={500}
              //   transitionLeaveTimeout={300}>


            return (
              // <CSSTransitionGroup
              //   in = "true"
              //   transitionName="fade"
              //   transitionAppear={true}
              //   transitionAppearTimeout={2000}
              //   transitionEnterTimeout={1000}
              //   transitionLeaveTimeout={2000}
              //   key = {index}>
              <div key = {index} >
                <Season key = {prevIndex} name = {seas}  className = {!this.state.showSeason ? "fadeOut": ''} togglePlay = {this.togglePlay}/>
                <Season key = {index} name = {season} showSeason = {!this.state.showSeason} togglePlay = {this.togglePlay}/>
              </div>
              // </CSSTransitionGroup>
            );
            // </CSSTransitionGroup>
          }
         })}
         <audio className = "audioTag" autoPlay loop>
           <source src={require("../assets/sounds/ocean-sound.mp3")} type=""/>
         Your browser does not support the audio element.
         </audio>
       </div>
 );
  };
}

export default Seasons;
