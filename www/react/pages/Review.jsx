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
    <div  className = "fluid ui icon input"  style = {{width: "100%", height:"200px"}}>
      <input type="text" name="name" placeholder = "Enter your review here..."/>
      <i className="comments outline icon"></i>
    </div>
    <div>
      <button className = "massive fluid ui blue button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Submit Review")}}> Submit Review </button>
      <button className = "massive fluid ui red button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Finish Lecture")}}> I'm Finished </button>
    </div>
  </div>);
  }
  });
module.exports = IndexPage;
