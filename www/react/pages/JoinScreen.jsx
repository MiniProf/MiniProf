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
    var isBooked = (app.getBookPos())? true:false;
    var bStyle = (!isBooked)?{height: "26vh"}:{};
    return(<div id="IndexPage" className="page">
    {(!this.state.void)?
    <div>
      <form>
        <label>
          <input type="text" name="name" style = {{width: "100%"}}/>
        </label>
      </form>
      <button className = "massive fluid ui green button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Join Session")}}> Join Session </button>
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
