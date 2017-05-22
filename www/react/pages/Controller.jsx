var React  = require('react');
var TopBar = require('../components/TopBar');
var request = require('superagent');
var io = require('socket.io-client')
var IndexPage = React.createClass({
  getInitialState:()=>{
    return {
      void:false,
      disabled:false
    };
  },
  reviewTest:function(letter){
      this.props.router.goto("/review");
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
  componentWillMount:function(){
    var socket = io("http://sccug-mini-prof.lancs.ac.uk:8000")
    socket.on('connect', (client) => {
      console.log(this.props.sessionCode);
        socket.emit("init", {tableName:"MP_Sessions",value:this.props.sessionCode});
        socket.on("message", (row) => {
          debugger;
            this.reviewTest("Submit Review");
        });
    });
    var socket2 = io("http://sccug-mini-prof.lancs.ac.uk:8000")
    socket2.on('connect', (client) => {
        socket2.emit("init", {tableName:"MP_Questions",value:this.props.sessionCode});
        socket2.on("message", (row) => {
          debugger;
          console.log(row);
          if( row.Acount == 0 && row.Bcount == 0 && row.Ccount == 0 && row.Dcount == 0 ){
            this.showSidebar();
          }
        });
    });
  },
  sendResponse:function(letter){
    debugger;
    request.post(serverName + 'TLS/')
    .set('content-type', 'application/x-www-form-urlencoded')
    .send({MINUTE:"8",SESSIONID:this.props.sessionCode, OPTION:letter})
    .end((err,res)=>{
      /*PASS THROUGH: MINUTE, SESSION ID, OPTION */
      this.setState({void:true});
    });
    this.setState({disabled:true});
    //$("#mainBtns button").addClass('disabled').prop('disabled',true);
    setTimeout(()=>{
      this.setState({disabled:false});
    }, 5000);
  },
  showSidebar:function(){
    $('.ui.sidebar')
    .sidebar('toggle')
  ;},

  render:function(){
    let classDis = (this.state.disabled)?'disabled':'';
    return(<div id="IndexPage" className="page">
    <div id="mainBtns">
      <button className={'massive fluid ui yellow button ' + classDis } disabled={(this.state.disabled)?true:false} style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Fast")}}> TOO FAST </button>
      <button className = {'massive fluid ui blue button ' + classDis } disabled={(this.state.disabled)?true:false} style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("NH")}}> DON'T UNDERSTAND </button>
      <button className = {'massive fluid ui red button ' + classDis } disabled={(this.state.disabled)?true:false} style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Slow")}}> TOO SLOW </button>
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
</div>);
}
});
module.exports = IndexPage;
