import React, {Component}  from 'react';

import './../containers/App.scss';

class SeasonV extends Component {

    state = {
        step: 0,
        count: 0,
        showSeason: false,
        seasons: ['autumn', 'winter', 'spring', 'summer'],
        songs: [],
        playing: true,
    };

    componentDidMount() {
        //var audio =  new Audio();
        //audio.src = "../assets/sounds/ocean-sound.mp3"
    }

    componentWillMount() {
        this._setInterval = setInterval(() => {
            let prev  = this.state.step;
            if (this.state.step < 3) {
                let temp = this.state.step;
                temp++;
                this.setState({
                    step: temp,
                });
            }
            else {
                this.setState({
                    step: 0,
                });
            }
            let current = this.state.step;
            let op = 0;
            let opTimer = setInterval(() => {
                op += 1/350;
                this.refs[ "season_" + current].style.opacity = (op)   <= 1 ? op : 1;
                this.refs[ "season_" + prev].style.opacity = (1 - op) <= 0.0 ? 0 :(1 - op);
                if(op >= 1){
                    clearInterval(opTimer);
                }
            },7);

            /*if (this.state.count < 3) {
                let temp = this.state.count;
                temp++;
                this.setState({
                    count: temp,
                });
            }
            else {
                this.setState({
                    count: 0,
                });
            }*/
        }, 7000);
    }

    componentWillUnmount() {
        clearInterval(this._setInterval);
    }

    togglePlay = (event) => {
        let audio = document.getElementsByClassName('audioTag')[0];
        //let audio = this.state.audio;
        let playing = this.state.playing;
        console.log(audio);

        if (playing === true) {
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
        return (
            <div>
                {this.state.seasons.map((season, index) => {
                    return (
                        <div key={index} ref={ "season_" + index } className={ "class_season" + index }>
                            <div className={['wrapper'].join(' ')}>

                                {/*----------- Content -----------*/}
                                <div className="content">
                                    <div className="main-container">
                                        <img src={require(`../assets/img/${season}/foreground.png`)}
                                             className="foreground-image"
                                             alt="foreground"/>
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
                        </div>
                    );
                })}
            </div>
        );
    };
}

export default SeasonV;
