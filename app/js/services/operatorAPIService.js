angular.module("listTelephone").service("operatorsAPI",function($http,config){
  this.getOperators = function(){
    return $http.get(config.baseUrl+"/operators");
  };
});
