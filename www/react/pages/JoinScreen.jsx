var React  = require('react');
var TopBar = require('../components/TopBar');
var request = require('superagent');
var IndexPage = React.createClass({
  getInitialState:()=>{
    history.pushState(null,null,location.href);
    window.onpopstate = function (event) {
      //history.go(1);
    };
    return {void:false};
  },
  sendResponse:function(letter){
    var SessionCode = this.state.text;
    this.props.grab(SessionCode);
    request.post(serverName +'Sessions/joinSession/')
    .set('content-type', 'application/x-www-form-urlencoded')
    .send({SESSIONID:SessionCode})
    .end((err,res)=>{

      if(!err && !res.body.error){
        this.props.router.goto("/controller");
      }
      else{
        this.setState({text:""});
        alert(res.body.msg);
      }
    });
  },
  onChange:function(e){
    this.setState({text:e.target.value});
  },
  autosubmit:function(e){
    if(e.which === 13){
      this.sendResponse(this.state.text)
    }
    else{
      return false;
    }
  },
  render:function(){
    return(<div id="IndexPage" className="page">
    <div  className = "fluid ui icon input focus"  style = {{width: "100%"}}>
      <input type="text" name="name" value={this.state.text} onChange={this.onChange} onKeyPress={this.autosubmit} placeholder = "Session Code..."/>
      <i className="sign in icon"></i>
    </div>
    <div>
      <br></br>
      <br></br>
      <br></br>
      <button type="submit" className = "massive fluid ui green button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse(this.state.text)}}> Join Session </button>
    </div>
</div>);
}
});
module.exports = IndexPage;
