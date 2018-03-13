import React, {Component}  from 'react';

// import './../containers/Test2.scss';

let foregroundImage = document.getElementsByClassName('foreground-image');

class Test2 extends Component {

    state = {
        step: 0,
        count: 0,
        showSeason: false,
        // seasons: ['autumn', 'winter', 'spring', 'summer'],
        seasons: ['autumn', 'winter', 'spring', 'summer'],
        hs : ['myFadeIn','myFadeOut','myFadeOut','myFadeOut'],
        step:0,
        playing: false,
        width: window.innerWidth,
        height: window.innerHeight,
        x: 0,
        y: 0,
        zoom: 1,
        scrollLeft: 0
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
      var el = document.getElementsByClassName('main-container')[0];
      var coef = e.shiftKey || e.ctrlKey ? 0.5 : 2,
          delm = document.documentElement,
          oz = this.state.zoom,
          nz = this.state.zoom * coef;

          // update current
          this.setState({
            zoom: oz > 1 ? 1 : nz,
            x: oz > 1 ? 0 : `50%`,
            y: 0
          })

          this.state.zoom > 1 ? window.scrollTo(this.state.width/2, 0) : window.scrollTo(0, 0);

    }

    componentWillMount() {
      //var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      //var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      () => this.updateDimensions();
      (e) => this.allowZoom(e);
      //var W = window.innerWidth
      //window.scrollTo(500, 50);
    }
    componentDidMount() {
      window.addEventListener("resize", () => this.updateDimensions());
      window.addEventListener("dblclick", (e) => this.allowZoom(e));

      window.scrollTo(500, 50);
        this._setInterval = setInterval(() => {
            let step = this.state.step;
            let classes = this.state.hs;
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
                    hs : classes
                });
            }
            else {
                classes[0] = 'myFadeIn2';
                classes[3] = 'myFadeOut2';
                // setTimeout(function(){
                //     classes[3] = 'myFadeOut';
                // },200);
                console.log(this.state.hs);
                this.setState({
                    step: 0,
                    hs : classes
                });
                console.log(this.state.hs);
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
                {this.state.seasons.map((season, index) => {
                  let bgStyles = {
                    backgroundImage: `url(${require(`../assets/img/${season}/foreground.jpg`)})`
                  }

                  // let zoomStyles = {
                  //   transform: 'translate('+ {this.state.x} +'px, '+ {this.state.y} +'px) '
                  //   + 'scale('+ {this.state.nz}+')'
                  // };

                  let zoomStyles = {
                    transform: `translate(${this.state.x}, 0) scale(${this.state.zoom})`
                  };




                    return (

                            <div key={index} className={['wrapper' , season , this.state.hs[index] ].join(' ')}>

                                {/*----------- Content -----------*/}
                                <div className="content">
                                    <div className="main-container" style = {zoomStyles}>
                                        <img src={require(`../assets/img/${season}/foreground.jpg`)}
                                             className="foreground-image"
                                             alt="foreground"

                                             />
                                        {/*----------- Boy -----------*/}
                                        <div className="boy">
                                            <a href="https://www.facebook.com/"
                                               target="_blank" className="hair"
                                               rel="">
                                            </a>
                                            <a href="https://www.google.com/"
                                               target="_blank" className="chair"
                                               rel="">
                                            </a>
                                        </div>
                                        {/*----------- Boy End-----------*/}

                                        <img src={require('../assets/img/icons/plus-minus-icon.png')} className = "plus-minus-icon" alt="plus-minus-icon" onClick={this.togglePlay}/>
                                    </div>
                                </div>
                                {/*----------- Content End -----------*/}
                            </div>

                    );
                })}
                <audio className = "audioTag" loop>
                    <source src={require("../assets/sounds/ocean_sound.mp3")} type=""/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    };
}

export default Test2;
