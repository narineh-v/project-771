import React, {Component} from 'react';

class Season extends Component {
  render() {
    return (
      <div className={["wrapper", this.props.name].join(' ')}>

      	{/*----------- Content -----------*/}
    		<div className= "content">
    			<div className="main-container">
    			  <img src={require(`../assets/img/${this.props.name}/foreground.png`)} className="foreground-image" alt ="foreground" />

    				{/*----------- Boy -----------*/}
    				 <div className ="boy">
    					 <a href ="https://www.facebook.com/" target="_blank" className="hair" rel ="">
    					 </a>
    					 <a href ="https://www.google.com/" target="_blank" className="chair" rel ="">
    					 </a>
    				 </div>
    				 {/*----------- Boy End-----------*/}

    				 <div rel ="" className="plus-minus-icon" onClick = {this.props.togglePlay}><img src={require("../assets/img/icons/plus-minus-icon.png")} alt ="plus-minus-icon"/></div>
    			</div>
    		</div>
    		{/*----------- Content End -----------*/}

    	</div>
    )
  }
};

export default Season;
