angular.module("listTelephone").factory("contactsAPI",function($http){
    var _getContatcs = function(){
      return $http.get("http://localhost:3412/contacts");
    };
    var _save = function(contact){
      return $http.post("http://localhost:3412/addContact",contact);
    };
    return {
      getContacts: _getContatcs,
      save: _save
    }
});
