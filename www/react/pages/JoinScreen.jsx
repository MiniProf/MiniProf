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
      this.props.router.goto("/controller");
    });
  },
  render:function(){
    return(<div id="IndexPage" className="page">
    <div  className = "fluid ui icon input focus"  style = {{width: "100%"}}>
      <input type="text" name="name" placeholder = "Session Code..."/>
      <i className="sign in icon"></i>
    </div>
    <div>
      <br></br>
      <br></br>
      <br></br>
      <button className = "massive fluid ui green button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Join Session")}}> Join Session </button>
    </div>
</div>);
}
});
module.exports = IndexPage;
