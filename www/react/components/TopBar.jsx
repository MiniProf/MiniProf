var React  = require('react');
var ReactDOM  = require('react-dom');

var TopBar = React.createClass({
  goBack:function(){
    this.props.router.goBack();
  },
  render:function(){
    return (<div id="TopBar" style={{height:"10vh",width:"100vw"}}>
      <div style={{display:"inline-block",width:"100%",float:"right",textAlign:"center"}}>
        <h2 style={{display:"inline-block",position:"relative",top:"2.5vh",fontSize:"8vh", color: "#fff"}}>{this.props.title}</h2>
      </div>
    </div>)
  }
});
module.exports = TopBar;
