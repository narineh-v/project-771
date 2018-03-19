import React, { Component } from 'react';

import './PageTwo.scss';

class PageTwo extends Component {
  state = {
    modalIsOpen: false
  }

  openModal = (e) => {
    this.setState({
      modalIsOpen: true
    })
  }

  toggleModal = (e) => {
    console.log(e.target)
    if(e.target.className == 'about' && this.state.modalIsOpen == false){
      this.setState({
        modalIsOpen: true
      })
    }
    else if(e.target.className == 'about' && this.state.modalIsOpen == true) {
      this.setState({
        modalIsOpen: false
      })
    }
  }

  Modal() {
    if(this.state.modalIsOpen == true) {
      return (
        <div className="modal">
          <img src={require(`../../assets/img/modal.png`)}/>
        </div>
      )
    }
  }

  componentWillMount() {
    (e) => this.closeModal(e);
  }

  componentDidMount() {
      window.addEventListener("click", (e) => {this.toggleModal(e)});
    }

  render(){
    return (
      <div className={["wrapper", this.props.season].join(' ')}>
          {/*----------- Content -----------*/}
          <div className="content">
              <div className="main-container">
                  <img src={require(`../../assets/img/autumn/page2_foreground.png`)}
                      className="foreground-image"
                       alt="foreground"
                       />
                   <a href="javascript:void(0)" className="about" rel="" onClick = {(e) => this.toggleModal(e)}>
                   </a>
                   <a href="https://www.facebook.com/" target="_blank" className="facebook" rel="">
                   </a>
                   <div className="cutouts">
                      <div className="cutout cutout_1"></div>
                      <div className="cutout cutout_2"></div>
                      <div className="cutout cutout_3"></div>
                      <div className="cutout cutout_4"></div>
                      <div className="cutout cutout_5"></div>
                      <div className="cutout cutout_6"></div>
                      <div className="cutout cutout_7"></div>
                      <div className="return"></div>
                      <div className="category"></div>
                   </div>
              </div>
          </div>
          {/*----------- Content End -----------*/}
          {this.Modal()}
      </div>
    );
  }
}

export default PageTwo;
