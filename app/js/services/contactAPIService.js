angular.module("listTelephone").factory("contactsAPI",function($http,config){
    var _getContatcs = function(){
      return $http.get(config.baseUrl+"/contacts");
    };
    var _save = function(contact){
      return $http.post(config.baseUrl+"/addContact",contact);
    };
    return {
      getContacts: _getContatcs,
      save: _save
    }
});
