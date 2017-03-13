var React  = require('react');
var TopBar = require('../components/TopBar');
var request = require('superagent');
var IndexPage = React.createClass({
  getInitialState:()=>{
    return {
      void: false,
      text: ""
    };
  },
  sendResponse:function(letter){
    request.post('http://wilsonator.co.uk/MiniProf/Review/')
    .set('content-type', 'application/x-www-form-urlencoded')
    .send({SESSIONID:this.props.sessionCode,REVIEW:this.state.text})
    .end((err,res)=>{

      this.setState({void:true})
      this.props.router.goto("/");
    });
  },
  onChange:function(e){
    this.setState({text:e.target.value});
  },
  render:function(){
    return(<div id="IndexPage" className="page">
      <div className="ui form">

      <div  className = "ui field"  style = {{width: "100%", height:"150px"}}>
        <label>Review</label>
        <textarea type="text" value={this.state.text} onChange={this.onChange} rows="5" style={{fontSize:"1.5em"}} name="name" placeholder = "Enter your review here..."/>
      </div>
      <div>
        <p style = {{color:"grey", textAlign:"center", fontSize:"12"}}>Please enter any comments about the lecture here, this will help both you and the lecturer when it comes to reviewing the lecture.</p>
        <br></br>
        <br></br>
        <button className = "massive fluid ui blue button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse("Submit") + window.localStorage.removeItem("sessionReconnect");}}> Submit </button>
        <button className = "massive fluid ui red button" style = {{margin:"10px 0px"}} onClick={()=>{this.props.router.goBack();}}> Cancel </button>
      </div>
    </div>
  </div>);
  }
  });
module.exports = IndexPage;
