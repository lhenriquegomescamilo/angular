angular.module("listTelephone").directive("uiAlert", function(){
	// Runs during compile
	return {
		templateUrl :"app/view/alert.html",
		repalce: true,
		restrict: "AE",
		scope: {
			title: "@"
		},

		transclude: true
	};
});