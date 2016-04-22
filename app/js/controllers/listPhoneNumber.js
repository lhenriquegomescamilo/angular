angular.module("listTelephone").controller("listTelephoneCtrl",function($scope,contactsAPI,operatorsAPI,serialGenerator){
  $scope.app = "List Telephone";
  $scope.contacts = [];
  $scope.operators = [];
  var readContacts = function(){
      contactsAPI.getContacts().success(function(data,status){
            $scope.contacts = data;
      }).error(function(data, status){
        $scope.error = "Não possível carregar os dados";
      });
  };

  var readOperators = function(){
    operatorsAPI.getOperators().success(function(data,status){
        $scope.operators = data;
    });
  }

  $scope.addContact = function(contact){
    contact.serial = serialGenerator.generate();
    contactsAPI.save(contact).success(function (data) {
        delete $scope.contact;
        $scope.contactForm.$setPristine();
        readContacts();
    });

  };

  $scope.disableButtonAddContact = function(contact){
      if(contact == null || contact.operator == null) return true;
      return !contact.name || !contact.phone || !contact.operator;
  };

  $scope.removeContactSelected = function(contacts){
        $scope.contacts = contacts.filter(function(contact){
          if(!contact.selected) return contact;
        });
  };

  $scope.isContactSelected = function(contacts){
    return contacts.some(function(contact){
      return contact.selected;
    });
  };

  $scope.orderBy = function(field){
    $scope.criteriaOrderBy = field;
    $scope.directOfOrder = !$scope.directOfOrder;
  };
  // call function http
  readContacts();
  readOperators();
});
