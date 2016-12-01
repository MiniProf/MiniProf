var React  = require('react');
var TopBar = require('../components/TopBar');
var IndexPage = React.createClass({
  getInitialState:()=>{
    return {};
  },
  render:function(){
    var isBooked = (app.getBookPos())? true:false;
    var bStyle = (!isBooked)?{height: "26vh"}:{};
    return(<div id="IndexPage" className="page">

    <button className = "massive fluid ui yellow button" style = {{margin:"10px 0px"}}> A </button>
    <button className = "massive fluid ui blue button" style = {{margin:"10px 0px"}}> B </button>
    <button className = "massive fluid ui red button" style = {{margin:"10px 0px"}}> C </button>
    <button className = "massive fluid ui green button" style = {{margin:"10px 0px"}}> D </button>

</div>);
},
  componentDidMount(){
    debugger;
    var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 0, lng: 0},
          zoom: 1,
          streetViewControl: false,
          mapTypeControlOptions: {
            mapTypeIds: ['moon']
          }
        });

        var moonMapType = new google.maps.ImageMapType({
          getTileUrl: function(coord, zoom) {
              var normalizedCoord = getNormalizedCoord(coord, zoom);
              if (!normalizedCoord) {
                return null;
              }
              var bound = Math.pow(2, zoom);
              return './img/floorPlan.png';
          },
          tileSize: new google.maps.Size(2024, 2024),
          maxZoom: 9,
          minZoom: 0,
          radius: 1738000,
          name: 'Moon'
        });

        map.mapTypes.set('moon', moonMapType);
        map.setMapTypeId('moon');
  }
});
module.exports = IndexPage;
