var React  = require('react');
var TopBar = require('../components/TopBar');
var request = require('superagent');
var IndexPage = React.createClass({
  getInitialState:()=>{
    return {void:false};
  },
  sendResponse:function(letter){
    request.get('http://wilsonator.co.uk/PollResponse.php?VOTE='+ letter).end((err,res)=>{
      debugger;
      this.setState({void:true})
      this.props.router.goto("/");
    });
  },
  render:function(){
    return(<div id="IndexPage" className="page">
    <div  className = "fluid ui icon input focus"  style = {{width: "100%", height:"150px"}}>
      <input type="text" name="name" placeholder = "Enter your review here..."/>
      <i className="comments outline icon"></i>
    </div>
    <div>
      <p style = {{color:"grey", textAlign:"center", fontSize:"12"}}>Please enter any comments about the lecture here, this will help both you and the lecturer when it comes to reviewing the lecture.</p>
      <br></br>
      <br></br>
      <button className = "massive fluid ui blue button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Submit")}}> Submit </button>
      <button className = "massive fluid ui red button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Cancel")}}> Cancel </button>
    </div>
  </div>);
  }
  });
module.exports = IndexPage;
