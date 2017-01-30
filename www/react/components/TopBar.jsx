var React  = require('react');
var ReactDOM  = require('react-dom');

var TopBar = React.createClass({
  goBack:function(){
    this.props.router.goBack();
  },
  render:function(){
    return (<div id="TopBar" style={{height:"10vh",width:"100vw"}}>
    {/*<i className="left icon" style={{float:"left",fontSize:"7vh",width:"5%",display:"inline-block",cursor:"pointer"}} onClick={this.goBack}></i>*/}
      <h2 style={{color:"white",display:"inline-block",position:"relative",top:"2.5vh",fontSize:"6vh",textAlign:"center",width:"100%"}}>{this.props.title}</h2>
      </div>)
  }
});
module.exports = TopBar;
