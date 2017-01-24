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
      this.setState({void:true});
    });
  },
  render:function(){
    var isBooked = (app.getBookPos())? true:false;
    var bStyle = (!isBooked)?{height: "26vh"}:{};
    return(<div id="IndexPage" className="page">
    {(!this.state.void)?
    <div>
      <button className = "massive fluid ui yellow button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Option A")}}> A </button>
      <button className = "massive fluid ui cyan button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Option B")}}> B </button>
      <button className = "massive fluid ui red button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Option C")}}> C </button>
      <button className = "massive fluid ui green button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Option D")}}> D </button>
    </div>
    :
    <div style={{textAlign:"center"}}>
      <h1>Attmempting session join...</h1>
    </div>
    }
</div>);
}
});
module.exports = IndexPage;
