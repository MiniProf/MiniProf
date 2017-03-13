var React  = require('react');
var TopBar = require('../components/TopBar');
var request = require('superagent');
var IndexPage = React.createClass({
  getInitialState:()=>{
    return {
      void:false,
      disabled:false
    };
  },
  reviewTest:function(letter){

    request.get('http://wilsonator.co.uk/PollResponse.php?VOTE='+ letter).end((err,res)=>{

      this.props.router.goto("/review");
    });
  },
  sendPoll:function(letter){

    //needs POLLID
    request.post(serverName + 'Poll/?SESSIONID='+this.props.sessionCode+'&VOTE='+ letter)
    .set({'content-type':"application/x-www-form-urlencoded"})
    .end((err,res)=>{
      if(!err && !res.body.error)
        this.setState({void:true},this.showSidebar);
    });
  },
  sendResponse:function(letter){
    debugger;
    request.post(serverName + 'TLS/')
    .set('content-type', 'application/x-www-form-urlencoded')
    .send({MINUTE:"8",SESSIONID:this.props.sessionCode, OPTION:letter})
    .end((err,res)=>{
      /*PASS THROUGH: MINUTE, SESSION ID, OPTION */
      $("#mainBtns button").addClass('disabled').prop('disabled',true);
      setTimeout(function() {
          $("#mainBtns button").removeClass('disabled').prop('disabled', false);
      }, 5000);
      this.setState({void:true});
    });
  },
  showSidebar:function(){
    $('.ui.sidebar')
    .sidebar('toggle')
  ;},

  render:function(){
    return(<div id="IndexPage" className="page">

    <div id="mainBtns">
      <button className = "massive fluid ui yellow button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Fast")}}> TOO FAST </button>
      <button className = "massive fluid ui blue button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("NH")}}> I DON'T UNDERSTAND? </button>
      <button className = "massive fluid ui red button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Slow")}}> TOO SLOW </button>
      <button className = "massive fluid ui green button" style = {{margin:"10px 0px"}} onClick={()=>{this.reviewTest("Submit Review")}}> Review Test </button>
    </div>

    <div className="ui thin bottom sidebar vertical menu">
      <a className="item" onClick={this.sendPoll.bind(this, "A")} style = {{textAlign:"center", background:"rgba(255,255,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        A
      </a>
      <a className="item" onClick={this.sendPoll.bind(this, "B")} style = {{textAlign:"center", background:"rgba(0,0,255,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        B
      </a>
      <a className="item" onClick={this.sendPoll.bind(this, "C")} style = {{textAlign:"center", background:"rgba(255,0,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        C
      </a>
      <a className="item" onClick={this.sendPoll.bind(this, "D")} style = {{textAlign:"center", background:"rgba(0,255,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
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
