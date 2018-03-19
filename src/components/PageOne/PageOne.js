import React, {Component} from 'react';
import { Route , BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Aux from '../../hoc/Auxx';
import PageTwo from '../PageTwo/PageTwo';
import { withRouter } from 'react-router-dom'


class PageOne extends Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
    //this.props.history.push("/page_two");
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/page_two'/>
    }
  }

 componentWillMount() {
   (e) => this.renderRedirect(e);
 }

  componentDidMount() {
    window.addEventListener("click", (e) => {this.setRedirect(e)});
  }


  render() {
    let zoomStyles = {
      transform: `translate(${this.props.x}, 0) scale(${this.props.zoom})`
    };

    let zoomStyles2 = {
      transform: `translate(${this.props.x}, ${this.props.x}) scale(${this.props.zoom})`
    };
    return (
      <Aux>{this.renderRedirect()}
      {this.props.seasons.map((season, index) => {
        return (
            <div className={["wrapper", season, this.props.toggleFade[index]].join(' ')} key = {index} style = {zoomStyles2}>

                {/*----------- Content -----------*/}
                <div className="content">
                    <div className="main-container">
                        <img src={require(`../../assets/img/${season}/foreground.jpg`)}
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
                        <img src={require('../../assets/img/icons/plus-minus-icon.png')} className = "plus-minus-icon" alt="plus-minus-icon" onClick={this.props.togglePlay}/>
                    </div>
                </div>
                {/*----------- Content End -----------*/}
            </div>
        )
      })}
      </Aux>
    )
  }
}

  export default PageOne;
