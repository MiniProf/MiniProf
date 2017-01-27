var React  = require('react');
var TopBar = require('../components/TopBar');
var request = require('superagent');
var IndexPage = React.createClass({
  getInitialState:()=>{
    return {void:false};
  },
  sendResponse:function(letter){
    request.get(serverName + 'PollResponse.php?VOTE='+ letter).end((err,res)=>{
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
    </div>

    <div className="ui thin bottom sidebar vertical menu">
      <a className="item" style = {{textAlign:"center", background:"rgba(255,255,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        A
      </a>
      <a className="item" style = {{textAlign:"center", background:"rgba(0,0,255,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        B
      </a>
      <a className="item" style = {{textAlign:"center", background:"rgba(255,0,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
        C
      </a>
      <a className="item" style = {{textAlign:"center", background:"rgba(0,255,0,0.7)", fontWeight:"bold", fontSize:"24", margin:"3px 3px"}}>
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
