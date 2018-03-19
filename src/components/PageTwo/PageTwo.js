import React, { Component } from 'react';

import './PageTwo.scss';

class PageTwo extends Component {
  render(){
    return (
      <div className={["wrapper", this.props.name].join(' ')}>
          {/*----------- Content -----------*/}
          <div className="content">
              <div className="main-container">
                  <img src={require(`../../assets/img/autumn/page2_foreground.png`)}
                       className="foreground-image"
                       alt="foreground"
                       />
                   <a href="https://www.facebook.com/"
                      target="_blank" className="about"
                      rel="">
                   </a>
                   <a href="https://www.facebook.com/"
                      target="_blank" className="facebook"
                      rel="">
                   </a>
              </div>
          </div>
          {/*----------- Content End -----------*/}
      </div>
    );
  }
}

export default PageTwo;
