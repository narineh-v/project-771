import React, {Component} from 'react';

class Autumn extends Component {
  render() {
    return (
      <div className="wrapper autumn">

      	{/*----------- Content -----------*/}
    		<div className= "content">
    			<div className="main-container">
    			  <img src={require("../assets/img/autumn/foreground.png")} className="foreground-image" alt ="foreground" />

    				{/*----------- Boy -----------*/}
    				 <div className ="boy">
    					 <a href ="https://www.facebook.com/" target="_blank" className="hair" rel ="">
    					 </a>
    					 <a href ="https://www.google.com/" target="_blank" className="chair" rel ="">
    					 </a>
    				 </div>
    				 {/*----------- Boy End-----------*/}

    				 <a href="" rel ="" className="plus-minus-icon"><img src={require("../assets/img/icons/plus-minus-icon.png")} alt ="plus-minus-icon"/></a>
    			</div>
    		</div>
    		{/*----------- Content End -----------*/}

    	</div>
    )
  }
};

export default Autumn;
