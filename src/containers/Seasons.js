import React , {Component}  from 'react';
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
//import { CSSTransitionGroup } from 'react-transition-group'
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './App.scss';

// Components
import Season from '../components/Season';


class Seasons extends Component {
  constructor(props) {
      super(props);
      this.state = {
      step: 0,
      showSeason: false,
      seasons: ['winter', 'spring', 'summer', 'autumn'],
      playing: true,
      currentClass: 'fadeIn',
      classes: ['fadeIn', 'fadeOut']
    };
  }

  componentWillMount() {

    this._setInterval = setInterval(() => {
      setTimeout(() => {
        this.setState({
        showSeason: !this.state.showSeason
        });
      },3500);

      console.log(this.state.showSeason)
      setTimeout(() => {
      this.setState({
        //currentClass: this.state.showSeason == true ? 'fadeIn' : 'fadeOut'
      });
    },7000);
     let step = this.state.step;

      if(this.state.step < 3){
        step++;
        if(this.state.seasons[step]){
          this.setState({
            currentClass: 'fadeIn'
          });
        }
        if(this.state.seasons[step - 1]){
          this.setState({
            currentClass: 'fadeOut'
          });
        }
        console.log(this.state.seasons[step - 1]);
        //this.state.seasons[step - 1] = 'myFadeOut';
        this.setState({
          step: step
        });
      }
      else {
        this.setState({
          step: 0
        });
      }
console.log(this.state.step)
    }, 7000);



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
          if(true) {

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

              <Season key = {index} name = {season} togglePlay = {this.togglePlay} classSeason = {index == this.state.step ? this.state.currentClass : ''}>
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
