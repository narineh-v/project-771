import React , {Component}  from 'react';
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
//import { CSSTransitionGroup } from 'react-transition-group'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './App.scss';

// Components
import Season from '../components/Season';


class Seasons extends Component {
  constructor(props) {
      super(props);
      this.state = {
      count: 0,
      showSeason: false,
      seasons: ['winter', 'autumn', 'spring', 'summer'],
      songs: [],
      playing: true
    };
  }


  componentDidMount() {
    //var audio =  new Audio();
    //audio.src = "../assets/sounds/ocean-sound.mp3"
  }

  fadeIn = () => {
    //this.setState({showSeason: true})
    console.log('fadein call');
  //  window.setTimeout(this.fadeIn, 1000);
  }

  f = (index) => {
    //console.log(index);
    //this.setState({showSeason: true})
  }


  fadeOut = (index) => {
    if(index == this.state.count){
      //console.log(index)
    }
  }

  componentWillMount() {
    this._setInterval = setInterval(() => {
      //console.log(this.state.count);
      setTimeout(() => {
      this.setState({
        showSeason: !this.state.showSeason
      });
    },3500);
      console.log(this.state.showSeason)
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
    }, 8000);

    if(!this.fadeIn === null){
      this.setState({ showSeason : false});
      console.log(this.state.showSeason);
    }

    if(!this.fadeOut === null){
      this.setState({ showSeason : true});
      console.log(this.state.showSeason);
    }

  };




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
    let seasons = (
      <div>
        {this.state.seasons.map((season, index) => {
          let showSeason = this.state.showSeason;
          let prevIndex = index == 0 ? 3 : index - 1;
          let nextIndex = index == 3 ? 0 : index + 1;
          let seas = this.state.seasons[prevIndex];
          let seas2 = this.state.seasons[nextIndex];

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

              <Season key = {index} name = {season} togglePlay = {this.togglePlay} classSeason = {this.state.showSeason == true ? 'show fadeout' : 'hide'}>
               //{index == this.state.count ? this.fadeOut(index) : false}
               //onCallback={(index) => this.fadeIn(index)}
              </Season>
              <Season key = {nextIndex} name = {seas2}  classSeason = {["fade", this.state.showSeason == false ? 'show' : 'hide fadein'].join(' ')} togglePlay = {this.togglePlay}>
              //{index == this.state.count + 1 ? this.fadeIn() : false}
              </Season>
            </div>
             // </CSSTransitionGroup>
          );
          // </CSSTransitionGroup>
        }
       })}
      </div>
    )
    return (
      <div>
      {seasons}


         <audio className = "audioTag"  loop>
           <source src={require("../assets/sounds/ocean_sound.mp3")} type=""/>

         Your browser does not support the audio element.
         </audio>
       </div>
 );
  };
}

export default Seasons;
