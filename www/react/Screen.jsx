var React  = require('react');
var TopBar = require('./components/TopBar');
var Router = require('./components/Router').Router;
var router = require('./components/Router').router;
var IndexPage = require('./pages/IndexPage');
var JoinScreen = require('./pages/JoinScreen');
var Controller = require('./pages/Controller');
var Review = require('./pages/Review');
import mat from 'material-ui/Avatar';

var Screen = React.createClass({
  getInitialState:function(){
    return {SessionCode:"Unknown"};
  },
  sessionGrab:function(SessionCode){
    this.setState({SessionCode:SessionCode});
  },
  render:function(){
  return(<div>
      <TopBar router={router} title="MiniProf"/>
      <Router router={router}>
        <JoinScreen path= "/" router={router} grab={this.sessionGrab}/>
        <Controller path="/controller" router={router} sessionCode={this.state.SessionCode}/>
        <Review path="/review" router={router} sessionCode={this.state.SessionCode}/>
        <IndexPage path="/index" router={router}/>
      </Router>
    </div>);
  }
});
module.exports = Screen;
