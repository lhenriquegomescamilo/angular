angular.module("listTelephone").config(function(serialGeneratorProvider){
  serialGeneratorProvider.setLength(100);
  console.log(serialGeneratorProvider.getLength());
});
