import React, {Component}  from 'react';

import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import Aux from '../hoc/Auxx';
// import './../containers/Test2.scss';

let foregroundImage = document.getElementsByClassName('foreground-image');

class Seasons extends Component {

    state = {
        step: 0,
        count: 0,
        showSeason: false,
        seasons: ['autumn', 'winter', 'spring', 'summer'],
        toggleFade : ['myFadeIn','myFadeOut','myFadeOut','myFadeOut'],
        step:0,
        playing: false,
        width: window.innerWidth,
        height: window.innerHeight,
        x: 0,
        y: 0,
        zoom: 1,
        scrollLeft: 0,
        isTouchDevice: false
    };


    updateDimensions() {
      this.setState({
          width: window.innerWidth,
          height: window.innerHeight
      });
      //console.log(this.state.width);
      // [...foregroundImage].map((el,i)=>{
      //   el.width = this.state.width;
      // });
    }

    allowZoom(e) {

      if (this.state.isTouchDevice) {
        return false; // prevent executing code
      }

      // /var el = document.getElementsByClassName('main-container')[0];
      var coef = e.shiftKey || e.ctrlKey ? 0.5 : 2,
          delm = document.documentElement,
          oz = this.state.zoom,
          nz = this.state.zoom * coef;

          // update current
          this.setState({
            zoom: oz > 1 ? 1 : nz,
            x: oz > 1 ? 0 : `50%`,
            y: 0
          });

          this.state.zoom > 1 ? window.scrollTo(this.state.width/2, 0) : window.scrollTo(0, 0);
    }

    touchZoom(e) {
      console.log('touch')
        this.setState({
          isTouchDevice: true
        });
      //window.removeEventListener("dblclick", (e) => this.allowZoom(e));
    }

    calcVH() {
      var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      console.log(vH);
      document.getElementsByClassName("wrapper").setAttribute("style", "height:" + vH + "px;");
    }
    isTouchDevice() {
       var el = document.createElement('div');
       el.setAttribute('ongesturestart', 'return;'); // or try "ontouctoggleFadetart"
       return typeof el.ongesturestart === "function";
       console.log('yes')
    }

    componentWillMount() {
      //var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      //var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      () => this.updateDimensions();
      (e) => this.allowZoom(e);
      () => this.calcVH();

    //(e) => this.touchZoom(e);
      // if ("ontouctoggleFadetart" in document.documentElement) {
      //   this.setState({
      //     isTouchDevice: true
      //   });
      //   console.log(this.state.isTouchDevice)
      // }

      //var W = window.innerWidth
      //window.scrollTo(500, 50);
    }

    componentDidMount() {
      window.addEventListener("resize", () => this.updateDimensions());
      window.addEventListener("dblclick", (e) => this.allowZoom(e));
      window.addEventListener("touchend", (e) => this.touchZoom(e));
      window.addEventListener('onorientationchange', () => this.calcVH(), true);
      // if ("ontouctoggleFadetart" in document.documentElement) {
      //  // return false;
      //  console.log('no')
      //  alert('hi')
      // } else { window.addEventListener("dblclick", (e) => this.allowZoom(e));}

      window.scrollTo(500, 50);
      this._setInterval = setInterval(() => {
          let step = this.state.step;
          let classes = this.state.toggleFade;
          console.log(step);
          if (this.state.step < 3) {
              step++;
              classes[step] = 'myFadeIn';
              classes[step - 1] = 'myFadeOut';
              // setTimeout(function(){
              //     classes[step - 1] = 'myFadeOut';
              // },100);
              this.setState({
                  step: step,
                  toggleFade : classes
              });
          }
          else {
              classes[0] = 'myFadeIn2';
              classes[3] = 'myFadeOut2';
              // setTimeout(function(){
              //     classes[3] = 'myFadeOut';
              // },200);
              console.log(this.state.toggleFade);
              this.setState({
                  step: 0,
                  toggleFade : classes
              });
              console.log(this.state.toggleFade);
          }
      },8000);

    }

    componentWillUnmount() {
        clearInterval(this._setInterval);
        window.removeEventListener("resize", () => this.updateDimensions());
    }

    togglePlay = (event) => {
        let audio = document.getElementsByClassName('audioTag')[0];

        //let audio = this.state.audio;
        let playing = this.state.playing;
        //console.log(audio);

        if (playing == true) {
            //console.log('pause');
            audio.pause();
        }
        else {
            //console.log('play');
            audio.play();
        }
        this.setState({playing: !playing});
        //audio.src = this.state.songs[this.props.song];

    };



    render() {
      // [...foregroundImage].map((el,i) => {
      //   el.width = this.state.width;
      // });
        return (
            <div>
                <PageOne togglePlay = {this.togglePlay} {...this.state}/>
                <audio className = "audioTag" loop>
                    <source src={require("../assets/sounds/ocean_sound.mp3")} type=""/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    };
}

export default Seasons;
