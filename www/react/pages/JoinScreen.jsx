var React  = require('react');
var TopBar = require('../components/TopBar');
var request = require('superagent');
var IndexPage = React.createClass({
  getInitialState:()=>{
    history.pushState(null,null,location.href);
    window.onpopstate = function (event) {
      //history.go(1);
    };
    return {void:false,text:""};
  },
  sendResponse:function(letter){
    var SessionCode = this.state.text;
    request.post(serverName +'Sessions/joinSession/')
    .set('content-type', 'application/x-www-form-urlencoded')
    .send({SESSIONID:SessionCode})
    .end((err,res)=>{

      if(!err && !res.body.error){
      this.props.grab(SessionCode);
      this.props.router.goto("/controller");
      }
      else{
        this.setState({text:""});
        alert(res.body.msg);
      }
    });
  },
  onChange:function(e){
    if(this.state.text.length < 6 || e.target.value.length < this.state.text.length)
      this.setState({text:e.target.value.toUpperCase()});
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
      <div className = "fluid ui icon input focus"  style = {{width: "100%"}}>
        <input type="text" name="name" value={this.state.text} onChange={this.onChange} maxlength="6"  onKeyPress={this.autosubmit} placeholder = "Session Code..."/>
        <i className="sign in icon"></i>
      </div>
      <div>
        <br></br>
        <button type="submit" className = "massive fluid ui green button" style = {{margin:"10px 0px"}} onClick={()=>{this.sendResponse(this.state.text)}}> Join Session </button>
      </div>
    </div>);
  }
});
module.exports = IndexPage;
