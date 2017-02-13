var React  = require('react');
var TopBar = require('../components/TopBar');
var request = require('superagent');
var IndexPage = React.createClass({
  getInitialState:()=>{
    return {void:false};
  },
  reviewTest:function(letter){
    debugger;
    request.get('http://wilsonator.co.uk/PollResponse.php?VOTE='+ letter).end((err,res)=>{
      debugger;
      this.props.router.goto("/review");
    });
  },
  sendPoll:function(letter){
    debugger;
    //needs POLLID
    request.post(serverName + 'Poll/?ID=3&VOTE='+ letter).end((err,res)=>{
      debugger;
      this.setState({void:true});
    });
  },
  sendResponse:function(letter){
    debugger;
    this.props.SessionCode
    request.post(serverName + 'TLS/')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({MINUTE:"8",SESSIONID:"000000",OPTION:letter})
    .end((err,res)=>{
      /*PASS THROUGH: MINUTE, SESSION ID, OPTION */
      debugger;
      this.setState({void:true});
    });
  },
  showSidebar:function(){
    $('.ui.sidebar')
    .sidebar('toggle')
  ;},
  render:function(){
    return(<div id="IndexPage" className="page">

    <div>
      <button className = "massive fluid ui yellow button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Fast")}}> TOO FAST </button>
      <button className = "massive fluid ui blue button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("NH")}}> I DON'T UNDERSTAND? </button>
      <button className = "massive fluid ui red button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Slow")}}> TOO SLOW </button>
      <button className = "massive fluid ui green button" style = {{margin:"10px 0px"}} onClick={()=>{this.reviewTest("Submit Review")}}> Review Test </button>
    </div>

    <div className="ui thin bottom sidebar vertical menu">
      <a className="item" onClick={()=>{this.sendPoll("A")}} onClick={this.showSidebar} style = {{textAlign:"center", background:"rgba(255,255,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        A
      </a>
      <a className="item" onClick={()=>{this.sendPoll("B")}} onClick={this.showSidebar} style = {{textAlign:"center", background:"rgba(0,0,255,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        B
      </a>
      <a className="item" onClick={()=>{this.sendPoll("C")}} onClick={this.showSidebar} style = {{textAlign:"center", background:"rgba(255,0,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        C
      </a>
      <a className="item" onClick={()=>{this.sendPoll("D")}} onClick={this.showSidebar} style = {{textAlign:"center", background:"rgba(0,255,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        D
      </a>
      <a className="item" onClick={this.showSidebar} style = {{textAlign:"center", background:"rgba(0,0,0,0)", fontWeight:"bold", fontSize:"16", margin:"3px 3px"}}>
        GO BACK
      </a>
    </div>
    <div className="center pusher" onClick={this.showSidebar}>
      <button className = "fluid ui green button" style = {{margin:"40px 0px"}}> ANSWER QUIZ </button>
    </div>
</div>);
}
});
module.exports = IndexPage;
