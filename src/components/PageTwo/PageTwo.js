import React, { Component } from 'react';

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
              </div>
          </div>
          {/*----------- Content End -----------*/}
      </div>
    );
  }
}

export default PageTwo;
