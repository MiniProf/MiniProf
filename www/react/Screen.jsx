var React  = require('react');
var TopBar = require('./components/TopBar');
var Router = require('./components/Router').Router;
var router = require('./components/Router').router;
var IndexPage = require('./pages/IndexPage');
var JoinScreen = require('./pages/JoinScreen');
var Controller = require('./pages/Controller');
var Review = require('./pages/Review');
import mat from 'material-ui/Avatar';

const Screen = () =>(
  <div>
      <TopBar router={router} title="MiniProf"/>
      <Router router={router}>
        <JoinScreen path= "/" router={router}/>
        <Controller path="/controller" router={router}/>
        <Review path="/review" router={router}/>
        <IndexPage path="/index" router={router}/>
      </Router>
      {/*
      <div className="ui top attached demo menu">
  <a  className="item">
    <i className="sidebar icon"></i>
    Menu
  </a>
</div>
<div className="ui bottom attached segment pushable">
  <div className="ui inverted labeled icon left inline vertical sidebar menu">
    <a className="item">
      <i className="home icon"></i>
    </a>
      Home
    <a className="item">
      <i className="block layout icon"></i>
      Topics
    </a>
    <a className="item">
      <i className="smile icon"></i>
      Friends
    </a>
    <a className="item">
      <i className="calendar icon"></i>
      History
    </a>
  </div>
  <div className="pusher">
    <div className="ui basic segment">
    </div>
  </div>
</div>*/}
    </div>);
    module.exports = Screen;
