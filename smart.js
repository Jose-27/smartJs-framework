var SmartJs = (function () {
  'use strict';


  function constants() {
    var key = arguments[0],val = arguments[1]
  }

  function routes(){
    var key = arguments[0],val = arguments[1]
  }

  function controller(){
    var key = arguments[0],val = arguments[1]
  }

  function factory(){
    var key = arguments[0],val = arguments[1]
  }

  return {
    'factory': factory,
    'routes': routes,
    'controller': controller,
    'constants': constants
  }

});

/*===============================================*/

var app = SmartJs();

app.factory('factory_name',['dependancy1', function(dependacy1){
  //body
}]);

app.routes('url','controller_name');

app.controller('controller_name',['dependancy1', function(dependacy1){
  //body
}]);

app.constants('name',function(){
  return{
    //body
  }
});
