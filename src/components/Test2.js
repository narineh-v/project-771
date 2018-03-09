import React, {Component}  from 'react';

// import './../containers/Test2.scss';

let foregroundImage = document.getElementsByClassName('foreground-image');

class Test2 extends Component {

    state = {
        step: 0,
        count: 0,
        showSeason: false,
        seasons: ['autumn', 'winter', 'spring', 'summer'],
        hs : ['myFadeIn','myFadeOut','myFadeOut','myFadeOut'],
        step:0,
        songs: [],
        playing: true,
        width: window.innerWidth,
        height: window.innerHeight
    };


    updateDimensions() {
      this.setState({
          width: window.innerWidth,
          height: window.innerHeight
      });
      console.log(this.state.width);
      // [...foregroundImage].map((el,i)=>{
      //   el.width = this.state.width;
      // });
    }

    componentWillMount() {
      //var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      //var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      () => this.updateDimensions();
      //var W = window.innerWidth

    }
    componentDidMount() {
      window.addEventListener("resize", () => this.updateDimensions());
      window.addEventListener("zoom", () => {console.log('yeah')});
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
                });
            }
            else {
                classes[0] = 'myFadeIn';
                classes[3] = 'myFadeOut';
                // setTimeout(function(){
                //     classes[3] = 'myFadeOut';
                // },200);
                this.setState({
                    step: 0,
                });
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
        console.log(audio);

        if (playing == true) {
            console.log('pause');
            audio.pause();
        }
        else {
            console.log('play');
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
                    backgroundImage: `url(${require(`../assets/img/${season}/foreground.png`)})`
                  }

                    return (

                            <div key={index} className={['wrapper' , season , this.state.hs[index] ].join(' ')}>

                                {/*----------- Content -----------*/}
                                <div className="content">
                                    <div className="main-container"  >
                                        <img src={require(`../assets/img/${season}/foreground.png`)}
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

                                        <div rel="" className="plus-minus-icon" onClick={this.togglePlay}>
                                            <img src={require('../assets/img/icons/plus-minus-icon.png')} alt="plus-minus-icon"/>
                                        </div>
                                    </div>
                                </div>
                                {/*----------- Content End -----------*/}
                            </div>

                    );
                })}
                <audio className = "audioTag" autoPlay loop>
                    <source src={require("../assets/sounds/ocean_sound.mp3")} type=""/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    };
}

export default Test2;
